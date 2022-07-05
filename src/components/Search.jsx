import { Input, Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

function Search({ search, setSearch }) {
  return (
    <div className="search">
      <Input
        className="searchInput"
        value={search}
        type="text"
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button type="primary" icon={<SearchOutlined />}>
        Search
      </Button>
    </div>
  )
}

export default Search
