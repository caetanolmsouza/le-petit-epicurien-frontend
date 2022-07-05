import { Input, Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

function Search({ search, setSearch }) {
  return (
    <div className="search">
      <Button type="primary" icon={<SearchOutlined />}>
        Search
      </Button>
      <Input
        className="searchInput"
        value={search}
        type="text"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  )
}

export default Search
