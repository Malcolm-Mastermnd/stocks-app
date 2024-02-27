export interface Bar {
  o: number
  h: number
  l: number
  c: number
  v: number
  vw: number
}

export interface AggregateBar extends Bar {
  T: string
  t: number
  n: number
}

export interface MinuteBar extends Bar {
  o: number
  h: number
  l: number
  c: number
  v: number
  vw: number
}

export interface AggregatesResponse {
  ticker: string
  queryCount: number
  resultsCount: number
  adjusted: boolean
  results?: AggregateBar[]
  status: string
  request_id: string
  count: number
}

export interface NewsResponse {
  count: number
  next_url: string
  request_id: string
  results: NewsStory[]
  status: string
}

export interface NewsStory {
  amp_url: string
  article_url: string
  author: string
  description: string
  id: string
  image_url: string
  keywords: string[]
  published_utc: string
  publisher: NewsPublisher
  tickers: string[]
  title: string
}

export interface NewsPublisher {
  favicon_url: string
  homepage_url: string
  logo_url: string
  name: string
}

export interface TickerDetailsResponse {
  request_id: string
  results: TickerDetails
  status: string
}

export interface TickerDetails {
  active: boolean
  address?: Address
  branding?: Branding
  cik?: string
  composite_figi?: string
  currency_name: string
  delisted_utc?: string
  description?: string
  homepage_url?: string
  list_date?: string
  locale: string
  market: string
  market_cap?: number
  name: string
  phone_number?: string
  primary_exchange?: string
  round_lot?: number
  share_class_figi?: string
  share_class_shares_outstanding?: number
  sic_code?: string
  sic_description?: string
  ticker: string
  ticker_root?: string
  total_employees?: number
  type?: string
  weighted_shares_outstanding?: number
}

export interface Address {
  address1: string
  city: string
  postal_code: string
  state: string
}

export interface Branding {
  icon_url: string
  logo_url: string
}

export interface TickerSnapshotResponse {
  ticker?: Ticker
  status: string
  request_id: string
}

export interface Ticker {
  ticker: string
  todaysChangePerc: number
  todaysChange: number
  updated: number
  day?: Bar
  min: MinuteBar
  prevDay: Bar
}

export interface StockFinancialsResponse {
  count: number
  next_url?: string
  request_id: string
  results: StockFinancials[]
  status: string
}

export interface StockFinancials {
  cik: string
  company_name: string
  end_date: string
  filing_date: string
  financials: {
    balance_sheet: {
      assets: FinancialsCategory
      equity: FinancialsCategory
      liabilities: FinancialsCategory
    }
    income_statement: { basic_earnings_per_share: FinancialsCategory }
  }
  fiscal_period: string
  fiscal_year: string
  source_filing_file_url: string
  source_filing_url: string
  start_date: string
}

export interface FinancialsCategory {
  label: string
  order: number
  unit: string
  value: number
}
