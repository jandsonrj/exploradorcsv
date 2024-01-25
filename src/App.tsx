import React, { useState } from 'react';
import Card from './components/Card';
import SearchBar from './components/SearchBar';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/App.css';

interface CSVData {
  [key: string]: string;
}

const App: React.FC = () => {
  const [data, setData] = useState<CSVData[]>([]);

  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <Header />
      <div style={{ marginTop: '20%' }}>
        <SearchBar onSearch={handleSearch} />
      </div>
      <Card data={data} searchQuery={searchQuery} setData={setData} />
      <Footer />
    </div>
  );
};

export default App;


// needed to import the default version of the application 

// const App: React.FC = () => {
  // const [data, setData] = useState<CSVData[]>([]);

  // const [searchQuery, setSearchQuery] = useState<string>('');

 // const handleSearch = (query: string) => {
   // setSearchQuery(query);
 // };
// const App: React.FC = () => {
  // const [data, setData] = useState<CSVData[]>([]);

  // const [searchQuery, setSearchQuery] = useState<string>('');

 // const handleSearch = (query: string) => {
   // setSearchQuery(query);
 // };
// const App: React.FC = () => {
  // const [data, setData] = useState<CSVData[]>([]);

  // const [searchQuery, setSearchQuery] = useState<string>('');

 // const handleSearch = (query: string) => {
   // setSearchQuery(query);
 // };
// const App: React.FC = () => {
  // const [data, setData] = useState<CSVData[]>([]);

  // const [searchQuery, setSearchQuery] = useState<string>('');

 // const handleSearch = (query: string) => {
   // setSearchQuery(query);
 // };
// const App: React.FC = () => {
  // const [data, setData] = useState<CSVData[]>([]);

  // const [searchQuery, setSearchQuery] = useState<string>('');

 // const handleSearch = (query: string) => {
   // setSearchQuery(query);
 // };
// const App: React.FC = () => {
  // const [data, setData] = useState<CSVData[]>([]);

  // const [searchQuery, setSearchQuery] = useState<string>('');

 // const handleSearch = (query: string) => {
   // setSearchQuery(query);
 // };
// const App: React.FC = () => {
  // const [data, setData] = useState<CSVData[]>([]);

  // const [searchQuery, setSearchQuery] = useState<string>('');

 // const handleSearch = (query: string) => {
   // setSearchQuery(query);
 // };
// const App: React.FC = () => {
  // const [data, setData] = useState<CSVData[]>([]);

  // const [searchQuery, setSearchQuery] = useState<string>('');

 // const handleSearch = (query: string) => {
   // setSearchQuery(query);
 // };
// const App: React.FC = () => {
  // const [data, setData] = useState<CSVData[]>([]);

  // const [searchQuery, setSearchQuery] = useState<string>('');

 // const handleSearch = (query: string) => {
   // setSearchQuery(query);
 // };
// const App: React.FC = () => {
  // const [data, setData] = useState<CSVData[]>([]);

  // const [searchQuery, setSearchQuery] = useState<string>('');

 // const handleSearch = (query: string) => {
   // setSearchQuery(query);
 // };
// const App: React.FC = () => {
  // const [data, setData] = useState<CSVData[]>([]);

  // const [searchQuery, setSearchQuery] = useState<string>('');

 // const handleSearch = (query: string) => {
   // setSearchQuery(query);
 // };
// const App: React.FC = () => {
  // const [data, setData] = useState<CSVData[]>([]);

  // const [searchQuery, setSearchQuery] = useState<string>('');

 // const handleSearch = (query: string) => {
   // setSearchQuery(query);
 // };
// const App: React.FC = () => {
  // const [data, setData] = useState<CSVData[]>([]);

  // const [searchQuery, setSearchQuery] = useState<string>('');

 // const handleSearch = (query: string) => {
   // setSearchQuery(query);
 // };
// const App: React.FC = () => {
  // const [data, setData] = useState<CSVData[]>([]);

  // const [searchQuery, setSearchQuery] = useState<string>('');

 // const handleSearch = (query: string) => {
   // setSearchQuery(query);
 // };
// const App: React.FC = () => {
  // const [data, setData] = useState<CSVData[]>([]);

  // const [searchQuery, setSearchQuery] = useState<string>('');

 // const handleSearch = (query: string) => {
   // setSearchQuery(query);
 // };
// const App: React.FC = () => {
  // const [data, setData] = useState<CSVData[]>([]);

  // const [searchQuery, setSearchQuery] = useState<string>('');

 // const handleSearch = (query: string) => {
   // setSearchQuery(query);
 // };
// const App: React.FC = () => {
  // const [data, setData] = useState<CSVData[]>([]);

  // const [searchQuery, setSearchQuery] = useState<string>('');

 // const handleSearch = (query: string) => {
   // setSearchQuery(query);
 // };
// const App: React.FC = () => {
  // const [data, setData] = useState<CSVData[]>([]);

  // const [searchQuery, setSearchQuery] = useState<string>('');

 // const handleSearch = (query: string) => {
   // setSearchQuery(query);
 // };
// const App: React.FC = () => {
  // const [data, setData] = useState<CSVData[]>([]);

  // const [searchQuery, setSearchQuery] = useState<string>('');

 // const handleSearch = (query: string) => {
   // setSearchQuery(query);
 // };
// const App: React.FC = () => {
  // const [data, setData] = useState<CSVData[]>([]);

  // const [searchQuery, setSearchQuery] = useState<string>('');

 // const handleSearch = (query: string) => {
   // setSearchQuery(query);
 // };
// const App: React.FC = () => {
  // const [data, setData] = useState<CSVData[]>([]);

  // const [searchQuery, setSearchQuery] = useState<string>('');

 // const handleSearch = (query: string) => {
   // setSearchQuery(query);
 // };
// const App: React.FC = () => {
  // const [data, setData] = useState<CSVData[]>([]);

  // const [searchQuery, setSearchQuery] = useState<string>('');

 // const handleSearch = (query: string) => {
   // setSearchQuery(query);
 // };
// const App: React.FC = () => {
  // const [data, setData] = useState<CSVData[]>([]);

  // const [searchQuery, setSearchQuery] = useState<string>('');

 // const handleSearch = (query: string) => {
   // setSearchQuery(query);
 // };
// const App: React.FC = () => {
  // const [data, setData] = useState<CSVData[]>([]);

  // const [searchQuery, setSearchQuery] = useState<string>('');

 // const handleSearch = (query: string) => {
   // setSearchQuery(query);
 // };
// const App: React.FC = () => {
  // const [data, setData] = useState<CSVData[]>([]);

  // const [searchQuery, setSearchQuery] = useState<string>('');

 // const handleSearch = (query: string) => {
   // setSearchQuery(query);
 // };
// const App: React.FC = () => {
  // const [data, setData] = useState<CSVData[]>([]);

  // const [searchQuery, setSearchQuery] = useState<string>('');

 // const handleSearch = (query: string) => {
   // setSearchQuery(query);
 // };
// const App: React.FC = () => {
  // const [data, setData] = useState<CSVData[]>([]);

  // const [searchQuery, setSearchQuery] = useState<string>('');

 // const handleSearch = (query: string) => {
   // setSearchQuery(query);
 // };
// const App: React.FC = () => {
  // const [data, setData] = useState<CSVData[]>([]);

  // const [searchQuery, setSearchQuery] = useState<string>('');

 // const handleSearch = (query: string) => {
   // setSearchQuery(query);
 // };
// const App: React.FC = () => {
  // const [data, setData] = useState<CSVData[]>([]);

  // const [searchQuery, setSearchQuery] = useState<string>('');

 // const handleSearch = (query: string) => {
   // setSearchQuery(query);
 // };
// const App: React.FC = () => {
  // const [data, setData] = useState<CSVData[]>([]);

  // const [searchQuery, setSearchQuery] = useState<string>('');

 // const handleSearch = (query: string) => {
   // setSearchQuery(query);
 // };
// const App: React.FC = () => {
  // const [data, setData] = useState<CSVData[]>([]);

  // const [searchQuery, setSearchQuery] = useState<string>('');

 // const handleSearch = (query: string) => {
   // setSearchQuery(query);
 // };
// const App: React.FC = () => {
  // const [data, setData] = useState<CSVData[]>([]);

  // const [searchQuery, setSearchQuery] = useState<string>('');

 // const handleSearch = (query: string) => {
   // setSearchQuery(query);
 // };
// const App: React.FC = () => {
  // const [data, setData] = useState<CSVData[]>([]);

  // const [searchQuery, setSearchQuery] = useState<string>('');

 // const handleSearch = (query: string) => {
   // setSearchQuery(query);
 // };
// const App: React.FC = () => {
  // const [data, setData] = useState<CSVData[]>([]);

  // const [searchQuery, setSearchQuery] = useState<string>('');

 // const handleSearch = (query: string) => {
   // setSearchQuery(query);
 // };
// const App: React.FC = () => {
  // const [data, setData] = useState<CSVData[]>([]);

  // const [searchQuery, setSearchQuery] = useState<string>('');

 // const handleSearch = (query: string) => {
   // setSearchQuery(query);
 // };
// const App: React.FC = () => {
  // const [data, setData] = useState<CSVData[]>([]);

  // const [searchQuery, setSearchQuery] = useState<string>('');

 // const handleSearch = (query: string) => {
   // setSearchQuery(query);
 // };
// const App: React.FC = () => {
  // const [data, setData] = useState<CSVData[]>([]);

  // const [searchQuery, setSearchQuery] = useState<string>('');

 // const handleSearch = (query: string) => {
   // setSearchQuery(query);
 // };
// const App: React.FC = () => {
  // const [data, setData] = useState<CSVData[]>([]);

  // const [searchQuery, setSearchQuery] = useState<string>('');

 // const handleSearch = (query: string) => {
   // setSearchQuery(query);
 // };
// const App: React.FC = () => {
  // const [data, setData] = useState<CSVData[]>([]);

  // const [searchQuery, setSearchQuery] = useState<string>('');

 // const handleSearch = (query: string) => {
   // setSearchQuery(query);
 // };
// const App: React.FC = () => {
  // const [data, setData] = useState<CSVData[]>([]);

  // const [searchQuery, setSearchQuery] = useState<string>('');

 // const handleSearch = (query: string) => {
   // setSearchQuery(query);
 // };
// const App: React.FC = () => {
  // const [data, setData] = useState<CSVData[]>([]);

  // const [searchQuery, setSearchQuery] = useState<string>('');

 // const handleSearch = (query: string) => {
   // setSearchQuery(query);
 // };
// const App: React.FC = () => {
  // const [data, setData] = useState<CSVData[]>([]);

  // const [searchQuery, setSearchQuery] = useState<string>('');

 // const handleSearch = (query: string) => {
   // setSearchQuery(query);
 // };
// const App: React.FC = () => {
  // const [data, setData] = useState<CSVData[]>([]);

  // const [searchQuery, setSearchQuery] = useState<string>('');

 // const handleSearch = (query: string) => {
   // setSearchQuery(query);
 // };
// const App: React.FC = () => {
  // const [data, setData] = useState<CSVData[]>([]);

  // const [searchQuery, setSearchQuery] = useState<string>('');

 // const handleSearch = (query: string) => {
   // setSearchQuery(query);
 // };
// const App: React.FC = () => {
  // const [data, setData] = useState<CSVData[]>([]);

  // const [searchQuery, setSearchQuery] = useState<string>('');

 // const handleSearch = (query: string) => {
   // setSearchQuery(query);
 // };
// const App: React.FC = () => {
  // const [data, setData] = useState<CSVData[]>([]);

  // const [searchQuery, setSearchQuery] = useState<string>('');

 // const handleSearch = (query: string) => {
   // setSearchQuery(query);
 // };
// const App: React.FC = () => {
  // const [data, setData] = useState<CSVData[]>([]);

  // const [searchQuery, setSearchQuery] = useState<string>('');

 // const handleSearch = (query: string) => {
   // setSearchQuery(query);
 // };
// const App: React.FC = () => {
  // const [data, setData] = useState<CSVData[]>([]);

  // const [searchQuery, setSearchQuery] = useState<string>('');

 // const handleSearch = (query: string) => {
   // setSearchQuery(query);
 // };
// const App: React.FC = () => {
  // const [data, setData] = useState<CSVData[]>([]);

  // const [searchQuery, setSearchQuery] = useState<string>('');

 // const handleSearch = (query: string) => {
   // setSearchQuery(query);
 // };
// const App: React.FC = () => {
  // const [data, setData] = useState<CSVData[]>([]);

  // const [searchQuery, setSearchQuery] = useState<string>('');

 // const handleSearch = (query: string) => {
   // setSearchQuery(query);
 // };
// const App: React.FC = () => {
  // const [data, setData] = useState<CSVData[]>([]);

  // const [searchQuery, setSearchQuery] = useState<string>('');

 // const handleSearch = (query: string) => {
   // setSearchQuery(query);
 // };
// const App: React.FC = () => {
  // const [data, setData] = useState<CSVData[]>([]);

  // const [searchQuery, setSearchQuery] = useState<string>('');

 // const handleSearch = (query: string) => {
   // setSearchQuery(query);
 // };
// const App: React.FC = () => {
  // const [data, setData] = useState<CSVData[]>([]);

  // const [searchQuery, setSearchQuery] = useState<string>('');

 // const handleSearch = (query: string) => {
   // setSearchQuery(query);
 // };
// const App: React.FC = () => {
  // const [data, setData] = useState<CSVData[]>([]);

  // const [searchQuery, setSearchQuery] = useState<string>('');

 // const handleSearch = (query: string) => {
   // setSearchQuery(query);
 // };
// const App: React.FC = () => {
  // const [data, setData] = useState<CSVData[]>([]);

  // const [searchQuery, setSearchQuery] = useState<string>('');

 // const handleSearch = (query: string) => {
   // setSearchQuery(query);
 // };
// const App: React.FC = () => {
  // const [data, setData] = useState<CSVData[]>([]);

  // const [searchQuery, setSearchQuery] = useState<string>('');

 // const handleSearch = (query: string) => {
   // setSearchQuery(query);
 // };
// const App: React.FC = () => {
  // const [data, setData] = useState<CSVData[]>([]);

  // const [searchQuery, setSearchQuery] = useState<string>('');

 // const handleSearch = (query: string) => {
   // setSearchQuery(query);
 // };
// const App: React.FC = () => {
  // const [data, setData] = useState<CSVData[]>([]);

  // const [searchQuery, setSearchQuery] = useState<string>('');

 // const handleSearch = (query: string) => {
   // setSearchQuery(query);
 // };
// const App: React.FC = () => {
  // const [data, setData] = useState<CSVData[]>([]);

  // const [searchQuery, setSearchQuery] = useState<string>('');

 // const handleSearch = (query: string) => {
   // setSearchQuery(query);
 // };
// const App: React.FC = () => {
  // const [data, setData] = useState<CSVData[]>([]);

  // const [searchQuery, setSearchQuery] = useState<string>('');

 // const handleSearch = (query: string) => {
   // setSearchQuery(query);
 // };
// const App: React.FC = () => {
  // const [data, setData] = useState<CSVData[]>([]);

  // const [searchQuery, setSearchQuery] = useState<string>('');

 // const handleSearch = (query: string) => {
   // setSearchQuery(query);
 // };
// const App: React.FC = () => {
  // const [data, setData] = useState<CSVData[]>([]);

  // const [searchQuery, setSearchQuery] = useState<string>('');

 // const handleSearch = (query: string) => {
   // setSearchQuery(query);
 // };
// const App: React.FC = () => {
  // const [data, setData] = useState<CSVData[]>([]);

  // const [searchQuery, setSearchQuery] = useState<string>('');

 // const handleSearch = (query: string) => {
   // setSearchQuery(query);
 // };
// const App: React.FC = () => {
  // const [data, setData] = useState<CSVData[]>([]);

  // const [searchQuery, setSearchQuery] = useState<string>('');

 // const handleSearch = (query: string) => {
   // setSearchQuery(query);
 // };
// const App: React.FC = () => {
  // const [data, setData] = useState<CSVData[]>([]);

  // const [searchQuery, setSearchQuery] = useState<string>('');

 // const handleSearch = (query: string) => {
   // setSearchQuery(query);
 // };
// const App: React.FC = () => {
  // const [data, setData] = useState<CSVData[]>([]);

  // const [searchQuery, setSearchQuery] = useState<string>('');

 // const handleSearch = (query: string) => {
   // setSearchQuery(query);
 // };
