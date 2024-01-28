import { useState,useEffect,useRef } from 'react';
import { Container } from './style';
import { useTheme,Appbar, Searchbar,DataTable, Text} from 'react-native-paper';
import { useDispatch,useSelector} from 'react-redux';
import { fetchCharactersData } from '@/Controller/API';
import { FlatList } from 'react-native';
import { CardHero } from '@/components/Card/CardHero';
import { LoadingIcon } from '@/components/Loading';


export default function Heros() {
  const dispatch = useDispatch();
  const[inputValue,setInputValue]=useState('');
  const [page, setPage] = useState(0);
  const{charactersData,status} = useSelector((state:any)=> state.MarvelApiSlice);
  useEffect(()=>{
    dispatch(fetchCharactersData({nameStartsWith: inputValue,limit: 20,offset: (20 * page)}));
  },[dispatch,inputValue,page])
  const theme = useTheme();
  return (
    <Container>
     <Appbar.Header>
     <Searchbar
      placeholder="Search"
      theme={theme}
      value={inputValue}
      onChangeText={(e)=>setInputValue(e)}
    />
     </Appbar.Header>
     {status === 'loading' &&  
      <LoadingIcon />}
      {status === 'failed' && <Text variant="titleLarge" style={{flex: 1,color: 'white', textAlign: 'center',alignItems: "center",justifyContent: 'center'}}>Not found results</Text>}
     {status === 'succeeded' && 
      <FlatList 
      data={charactersData.data.results}
      renderItem={({item}:any)=> <CardHero props={item}/>
    }
      keyExtractor={item => item.id}
     
     />}
    <DataTable>
       <DataTable.Pagination
        page={page}
        numberOfPages={charactersData.data.total / 20}
        onPageChange={page => setPage(page)}
        showFastPaginationControls
        numberOfItemsPerPageList={charactersData.data.count}
        numberOfItemsPerPage={20}
       label={`Page ${page +1}`}
        />
    </DataTable>
    </Container>
  );
}
