import { Card, Typography } from '@mui/material';
import FlexXBox from '../common/FlexXBox';
import PercentaceChange from '../common/PercentageChange';
import { calculatePercentChange as calcPercentChange, formatMoney } from '../../utils/utils';
import useAxios from 'axios-hooks';
import { AggregatesResponse, StockFinancialsResponse, SymbolInfo, TickerDetailsResponse } from '../../types/polygon.types';
import { useContext, useEffect } from 'react';
import { UserPreferencesContext } from '../../context/react-context/UserPreferences';

const FIVE_MINUTES = 5 * 60 * 1000;

const date = new Date();
const EST_OFFSET = 5; // EST is UTC-5
date.setHours(date.getHours() - EST_OFFSET);
const TODAY_EST = date.toISOString().split('T')[0];
const LAST_YEAR_EST = new Date(date.setFullYear(date.getFullYear() - 1)).toISOString().split('T')[0];

interface AdvancedInfoCardsProps {
  stock: SymbolInfo;
}

function AdvancedInfoCards({
  stock,
}: AdvancedInfoCardsProps) {
  const { currency } = useContext(UserPreferencesContext);

  const [
    {
    data: weekBarData,
      loading: isWeekBarLoading,
      error: weekBarError,
    },
    refetchWeekBarData,
  ] = useAxios<AggregatesResponse>({
  url: `${import.meta.env.VITE_POLYGON_API_BASE_URL}/v2/aggs/ticker/${stock.ticker}/range/1/week/${LAST_YEAR_EST}/${TODAY_EST}`,
  params: {
    apiKey: import.meta.env.VITE_POLYGON_API_KEY,
    adjusted: true,
    sort: 'desc',
  }
  });

  const [
    {
      data: monthBarData,
      loading: isMonthBarLoading,
      error: monthBarError,
    },
    refetchMonthBarData,
  ] = useAxios<AggregatesResponse>({
  url: `${import.meta.env.VITE_POLYGON_API_BASE_URL}/v2/aggs/ticker/${stock.ticker}/range/1/month/${LAST_YEAR_EST}/${TODAY_EST}`,
  params: {
    apiKey: import.meta.env.VITE_POLYGON_API_KEY,
    adjusted: true,
    sort: 'desc',
  }
  });

  const [
    {
      data: yearBarData,
      loading: isYearBarLoading,
      error: yearBarError,
    },
    refetchYearBarData,
  ] = useAxios<AggregatesResponse>({
  url: `${import.meta.env.VITE_POLYGON_API_BASE_URL}/v2/aggs/ticker/${stock.ticker}/range/1/year/${LAST_YEAR_EST}/${TODAY_EST}`,
  params: {
    apiKey: import.meta.env.VITE_POLYGON_API_KEY,
    adjusted: true,
    sort: 'desc',
  }
  });

  const [
    {
      data: tickerDetailsData,
      loading: isTickerDetailsLoading,
      error: tickerDetailsError,
    },
    refetchTickerDetailsData,
  ] = useAxios<TickerDetailsResponse>({
    url: `${import.meta.env.VITE_POLYGON_API_BASE_URL}/v3/reference/tickers/${stock.ticker}`,
    params: {
      apiKey: import.meta.env.VITE_POLYGON_API_KEY,
    }
  });

  const [
    {
      data: stockFinancialsData,
      loading: isStockFinancialsLoading,
      error: stockFinancialsError,
    },
    refetchStockFinancialsData,
  ] = useAxios<StockFinancialsResponse>({
    url: `${import.meta.env.VITE_POLYGON_API_BASE_URL}/vX/reference/financials`,
    params: {
      apiKey: import.meta.env.VITE_POLYGON_API_KEY,
      ticker: stock.ticker,
    }
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      refetchWeekBarData();
      refetchMonthBarData();
      refetchYearBarData();
      refetchTickerDetailsData();
      refetchStockFinancialsData();
    }, FIVE_MINUTES);
    return () => clearInterval(intervalId);
  }, [])

  const isLoading = isWeekBarLoading || isMonthBarLoading || isYearBarLoading || isTickerDetailsLoading || isStockFinancialsLoading;
  const isError = !!weekBarError || !!monthBarError || !!yearBarError || !!tickerDetailsError || !!stockFinancialsError;
  const noData = !weekBarData || !monthBarData || !yearBarData || !tickerDetailsData || !stockFinancialsData;

  if ((isLoading) && noData) return <Typography variant='h6'>Loading</Typography>;
  if (isError) return <Typography variant='h6'>Error</Typography>;
  if (noData) return <Typography variant='h6'>No Data</Typography>;

  const eps = stockFinancialsData.results?.[0]?.financials?.income_statement?.basic_earnings_per_share?.value;
  const liabilities = stockFinancialsData.results?.[0]?.financials?.balance_sheet?.liabilities?.value;
  const assets = stockFinancialsData.results?.[0]?.financials?.balance_sheet?.assets?.value;
  const marketCap = tickerDetailsData.results.market_cap;

  return (
    <FlexXBox width='100%' gap={2}>

      {/* Percentages Card */}
      <Card sx={{ width: '100%', mb: 2, p: 2 }} elevation={5}>
        <FlexXBox justifyContent='space-between'>
          <Typography variant='h6'>In the Last Week</Typography>
          <PercentaceChange
            percentage={calcPercentChange(weekBarData.results?.[0]?.o, weekBarData.results?.[0]?.c)}
          />
        </FlexXBox>
        <FlexXBox justifyContent='space-between'>
          <Typography variant='h6'>In the Last Month</Typography>
          <PercentaceChange
            percentage={calcPercentChange(monthBarData.results?.[0]?.o, monthBarData.results?.[0]?.c)}
          />
        </FlexXBox>
        <FlexXBox justifyContent='space-between'>
          <Typography variant='h6'>In the Last Year</Typography>
          <PercentaceChange
            percentage={calcPercentChange(yearBarData.results?.[0]?.o, yearBarData.results?.[0]?.c)}
          />
        </FlexXBox>
      </Card>

      {/* Extra Info Card */}
      <Card sx={{ width: '100%', mb: 2, p: 2 }} elevation={5}>
        <FlexXBox justifyContent='space-between'>
          <Typography variant='h6'>Assets to Liabilities Ratio</Typography>
          <Typography variant='h6'>{(assets/liabilities).toFixed(2)}</Typography>
        </FlexXBox>
        <FlexXBox justifyContent='space-between'>
          <Typography variant='h6'>Earnings Per Share</Typography>
          <Typography variant='h6'>{`${formatMoney(eps, currency)}`}</Typography>
        </FlexXBox>
        <FlexXBox justifyContent='space-between'>
          <Typography variant='h6'>Market Cap</Typography>
          <Typography variant='h6'>{formatMoney(marketCap, currency)}</Typography>
        </FlexXBox>
      </Card>

    </FlexXBox>
  );
}

export default AdvancedInfoCards;
