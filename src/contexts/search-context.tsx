import { createContext, useState } from 'react'

interface SearchContextProps {
  searchTerm: string
  setSearchTerm: (courses: string) => void
  handleClearSearch: () => void
}

export const SearchContext = createContext<SearchContextProps | undefined>(
  undefined
)

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchTerm, setSearchTerm] = useState<string>('')

  const handleClearSearch = () => {
    setSearchTerm('')
  }

  return (
    <SearchContext.Provider
      value={{ searchTerm, setSearchTerm, handleClearSearch }}
    >
      {children}
    </SearchContext.Provider>
  )
}
