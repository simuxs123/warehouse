import React,{useState} from 'react'
function Pagination({totalProducts,currentPage,productsPerPage,paginate}) {
    const pageNumbers=[];
    const [startIndex,setStartIndex]=useState(0);
    const [endIndex,setEndIndex]=useState(5)
    for (let i=1; i<=Math.ceil(totalProducts/productsPerPage);i++)//puslapiu numeravimas
        pageNumbers.push(i)
    function handleA(page){ //veiksmai su pagination po paspaudimo
        if(page===endIndex+1){
            setStartIndex(page-1);
            setEndIndex(page+4);   
        } else if(page===startIndex){
            setStartIndex(page-5); 
            setEndIndex(page) 
        } else if(page===1){
            setStartIndex(0); 
            setEndIndex(5)
        } else if(page===pageNumbers.length){
            setStartIndex(pageNumbers.length-5); 
            setEndIndex(pageNumbers.length)
        } 
        paginate(page)
    }
    
    return (
        <nav>        
            <ul className="pagination justify-content-center">
                <li key={new Date().getDate.toString()} className={`${(currentPage===1 && 'page-item disabled')||'page-item'}`} >
                    <a onClick={()=>handleA(1)} href="#!" className="page-link pad">&lt;&lt;</a>{/* i pradzia pagination */}
                </li>
                <li key={0} className={`${(currentPage===1 && 'page-item disabled')||'page-item'}`} >
                    <a onClick={()=>handleA(currentPage-1)} href="#!" className="page-link pad">Prev</a>{/* vienu atgal pagination */}
                </li>
                {   
                    pageNumbers.slice(startIndex,endIndex).map(page=>{ /* 5 mygtukai su puslapiais pagination */
                    return (
                        
                        <li key={page} className={`${currentPage===page && 'active page-item'}`} >
                            <a onClick={()=>handleA(page)} href="#!" className="page-link">{page}</a>
                        </li>                       
                    )                  
                })}
                <li key={pageNumbers.length+1} className={`${(currentPage===pageNumbers.length && 'page-item disabled')||'page-item'}`} >
                    <a onClick={()=>handleA(currentPage+1)}  href="#!" className="page-link pad">Next</a>{/* vienu i prieki pagination */}
                </li>
                <li key={new Date().getTime().toString()} className={`${(currentPage===pageNumbers.length && 'page-item disabled')||'page-item'}`} >
                    <a onClick={()=>handleA(pageNumbers.length)} href="#!" className=" page-link pad">&gt;&gt;</a>{/* i pabaiga pagination */}
                </li>
            </ul>
        </nav>
    )
}

export default Pagination
