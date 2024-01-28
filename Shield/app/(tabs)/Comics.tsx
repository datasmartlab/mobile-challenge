import { useState,useEffect,useRef } from 'react';
import { Container } from './style';
import { useTheme,Appbar, Searchbar,DataTable, Text} from 'react-native-paper';
import { useDispatch,useSelector} from 'react-redux';
import { fetchAllComicsData } from '@/Controller/API';
import { FlatList } from 'react-native';
import { CardComics } from '@/components/Card/CardComics';

import { LoadingIcon } from '@/components/Loading';
import LottieView from 'lottie-react-native';

export default function Comics() {
  const dispatch = useDispatch();
  const[inputValue,setInputValue]=useState('');
  const [page, setPage] = useState(0);
  const{comics,status} = useSelector((state:any)=> state.MarvelApiSlice);
  useEffect(()=>{
    dispatch(fetchAllComicsData({nameStartsWith: inputValue,limit: 20,offset: (20 * page)}));
  },[dispatch,inputValue,page])
  const animation = useRef(null);
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
     {comics.status !== 'Ok' &&  
     <LoadingIcon />}
      {status === 'failed' && <Text variant="titleLarge" style={{flex: 1,color: 'white', textAlign: 'center',alignItems: "center",justifyContent: 'center'}}>Not found results</Text>}
     {comics.status === 'Ok' && 
     <>
      <FlatList 
      data={comics.data.results}
      renderItem={({item}:any)=> <CardComics props={item}/>
    }
      keyExtractor={item => item.id}
     />
     <DataTable>
     <DataTable.Pagination
      page={page}
      numberOfPages={comics.data.total / 20}
      onPageChange={page => setPage(page)}
      showFastPaginationControls
      numberOfItemsPerPageList={comics.data.count}
      numberOfItemsPerPage={20}
     label={`Page ${page +1}`}
      />
  </DataTable>
  </>
     }
   
    </Container>
  );
}
