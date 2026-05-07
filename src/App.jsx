import { useState, useEffect } from 'react'

const COLORS = {
  bg: '#121212',
  bgSection: '#242833',
  accent: '#334fb4',
  white: '#ffffff',
  gray: '#8a92a1',
  lightGray: '#3a4452',
}

const GOOGLE_SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/1cECO9T_Pet00U3O1jERMCAjXRobWWu-FQV_rfGMbeoA/export?format=csv'

export default function App() {
  const [investment, setInvestment] = useState(100000)
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await fetch(GOOGLE_SHEET_CSV_URL)
      const csvText = await response.text()
      const parsed = parseCSV(csvText)
      setData(parsed)
    } catch (err) {
      console.error('Error fetching data:', err)
      setError('Failed to load data from spreadsheet')
      setData(getMockData())
    } finally {
      setLoading(false)
    }
  }

  const parseCSV = (csvText) => {
    const lines = csvText.split('\n').filter(line => line.trim())
    const headers = lines[0].split(',').map(h => h.trim())

    // For now, return mock data structure
    return getMockData()
  }

  const getMockData = () => ({
    company: 'The Power Coffee',
    valuation: 5000000,
    fundingRound: 500000,
    breakeven: 18,
    useOfProceeds: {
      marketing: 0.30,
      cogs: 0.35,
      logistics: 0.20,
      salaries: 0.15,
    },
    projections: Array.from({ length: 7 }, (_, i) => ({
      year: i + 1,
      revenue: 200000 * Math.pow(1.5, i),
      ebitda: 20000 * Math.pow(1.4, i),
    })),
    capTable: [
      { name: 'Founders', equity: 0.50 },
      { name: 'Early Investors', equity: 0.30 },
      { name: 'New Investor', equity: 0.20 },
    ],
  })

  const calculateMetrics = () => {
    if (!data) return {}

    const investmentPercentage = (investment / data.fundingRound) * 100
    const postMoneyValuation = data.valuation + data.fundingRound
    const equity = (investment / postMoneyValuation) * 100
    const returnMultiple = postMoneyValuation / data.valuation

    return {
      equity: equity.toFixed(2),
      returnMultiple: returnMultiple.toFixed(2),
      investmentPercentage: Math.min(investmentPercentage, 100),
    }
  }

  const metrics = calculateMetrics()

  return (
    <div style={{ backgroundColor: COLORS.bg, color: COLORS.white, minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: 'Inter, sans-serif' }}>
      {/* Header */}
      <div style={{ backgroundColor: COLORS.bgSection, padding: '2rem', borderBottom: `1px solid ${COLORS.lightGray}` }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ margin: 0, fontSize: '2rem', fontWeight: 'bold' }}>⚡ The Power Coffee — Investor Simulator</h1>
          <p style={{ margin: '0.5rem 0 0 0', color: COLORS.gray, fontSize: '0.95rem' }}>
            Model your investment and explore projected returns across a 7-year horizon
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem', flex: 1, width: '100%' }}>
        {error && (
          <div style={{ backgroundColor: '#8b0000', padding: '1rem', borderRadius: '0.5rem', marginBottom: '2rem' }}>
            {error}
          </div>
        )}

        {loading ? (
          <div style={{ textAlign: 'center', padding: '3rem' }}>Loading...</div>
        ) : (
          <>
            {/* Investment Slider */}
            <div style={{ backgroundColor: COLORS.bgSection, padding: '2rem', borderRadius: '0.5rem', marginBottom: '2rem' }}>
              <h2 style={{ marginTop: 0, marginBottom: '1.5rem', fontSize: '1.3rem' }}>Your Investment</h2>
              <div>
                <input
                  type="range"
                  min="50000"
                  max="500000"
                  step="10000"
                  value={investment}
                  onChange={(e) => setInvestment(parseInt(e.target.value))}
                  style={{ width: '100%', cursor: 'pointer' }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem', fontSize: '0.9rem', color: COLORS.gray }}>
                  <span>$50K</span>
                  <span style={{ fontSize: '1.5rem', color: COLORS.accent, fontWeight: 'bold' }}>
                    ${(investment / 1000).toFixed(0)}K
                  </span>
                  <span>$500K</span>
                </div>
              </div>
            </div>

            {/* Overview Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
              <MetricCard label="Equity %" value={`${metrics.equity}%`} />
              <MetricCard label="Return Multiple" value={`${metrics.returnMultiple}x`} />
              <MetricCard label="Post-Money Valuation" value={`$${(data.valuation / 1000000).toFixed(1)}M`} />
              <MetricCard label="Breakeven" value={`${data.breakeven} months`} />
            </div>

            {/* Use of Proceeds */}
            <div style={{ backgroundColor: COLORS.bgSection, padding: '2rem', borderRadius: '0.5rem', marginBottom: '2rem' }}>
              <h2 style={{ marginTop: 0, marginBottom: '1.5rem' }}>Use of Proceeds</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
                {Object.entries(data.useOfProceeds).map(([key, value]) => (
                  <div key={key}>
                    <div style={{ textTransform: 'capitalize', marginBottom: '0.5rem', color: COLORS.gray, fontSize: '0.9rem' }}>
                      {key}
                    </div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: COLORS.accent }}>
                      {(value * 100).toFixed(0)}%
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 7-Year Projections */}
            <div style={{ backgroundColor: COLORS.bgSection, padding: '2rem', borderRadius: '0.5rem', marginBottom: '2rem' }}>
              <h2 style={{ marginTop: 0, marginBottom: '1.5rem' }}>7-Year Projections</h2>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                  <thead>
                    <tr style={{ borderBottom: `1px solid ${COLORS.lightGray}` }}>
                      <th style={{ padding: '0.75rem', textAlign: 'left', color: COLORS.gray }}>Year</th>
                      <th style={{ padding: '0.75rem', textAlign: 'left', color: COLORS.gray }}>Revenue</th>
                      <th style={{ padding: '0.75rem', textAlign: 'left', color: COLORS.gray }}>EBITDA</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.projections.map((proj) => (
                      <tr key={proj.year} style={{ borderBottom: `1px solid ${COLORS.lightGray}` }}>
                        <td style={{ padding: '0.75rem' }}>Year {proj.year}</td>
                        <td style={{ padding: '0.75rem' }}>${(proj.revenue / 1000000).toFixed(2)}M</td>
                        <td style={{ padding: '0.75rem' }}>${(proj.ebitda / 1000000).toFixed(2)}M</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Cap Table */}
            <div style={{ backgroundColor: COLORS.bgSection, padding: '2rem', borderRadius: '0.5rem' }}>
              <h2 style={{ marginTop: 0, marginBottom: '1.5rem' }}>Cap Table</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
                {data.capTable.map((item) => (
                  <div key={item.name}>
                    <div style={{ marginBottom: '0.5rem', color: COLORS.gray, fontSize: '0.9rem' }}>
                      {item.name}
                    </div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: COLORS.accent }}>
                      {(item.equity * 100).toFixed(0)}%
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: COLORS.bgSection, borderTop: `1px solid ${COLORS.lightGray}`, padding: '2rem', marginTop: 'auto' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <div>
              <p style={{ margin: '0 0 0.5rem 0', color: COLORS.gray, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Connect with The Power Coffee
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                <a href="https://thepowercoffee.com" target="_blank" rel="noopener noreferrer" style={{ color: COLORS.accent, textDecoration: 'none', fontSize: '0.95rem', transition: 'opacity 0.2s' }}>
                  Website
                </a>
                <a href="https://instagram.com/powercoffee.ofc" target="_blank" rel="noopener noreferrer" style={{ color: COLORS.accent, textDecoration: 'none', fontSize: '0.95rem' }}>
                  Instagram
                </a>
                <a href="https://a.co/d/09Gmr1Sq" target="_blank" rel="noopener noreferrer" style={{ color: COLORS.accent, textDecoration: 'none', fontSize: '0.95rem' }}>
                  Amazon
                </a>
                <a href="https://higgsfield.ai/@thepowercoffee" target="_blank" rel="noopener noreferrer" style={{ color: COLORS.accent, textDecoration: 'none', fontSize: '0.95rem' }}>
                  Higgsfield
                </a>
              </div>
            </div>
          </div>
          <p style={{ margin: 0, color: COLORS.gray, fontSize: '0.85rem', borderTop: `1px solid ${COLORS.lightGray}`, paddingTop: '1.5rem' }}>
            ⚡ The Power Coffee — Fuel the people who show up fully every day.
          </p>
        </div>
      </footer>
    </div>
  )
}

function MetricCard({ label, value }) {
  return (
    <div style={{ backgroundColor: COLORS.bgSection, padding: '1.5rem', borderRadius: '0.5rem', border: `1px solid ${COLORS.lightGray}` }}>
      <div style={{ color: COLORS.gray, fontSize: '0.85rem', marginBottom: '0.5rem' }}>
        {label}
      </div>
      <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: COLORS.accent }}>
        {value}
      </div>
    </div>
  )
}
