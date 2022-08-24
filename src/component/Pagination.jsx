import React from 'react'

export default function Pagination(props) {
    let {setPageSelected ,pageSelected} = props
    
    
    
  return (
<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><button class="page-link"><i class="fa fa-angle-left"  onClick={()=>{setPageSelected(pageSelected -1)}}></i></button></li>
    <li class="page-item"><button class="page-link" onClick={() => {setPageSelected(1)}}>1</button></li>
    <li class="page-item"><button class="page-link" onClick={() => {setPageSelected(2)}}>2</button></li>
    <li class="page-item"><button class="page-link" onClick={() => {setPageSelected(3)}}>3</button></li>
    <li class="page-item"><button class="page-link" onClick={() => {setPageSelected(4)}}>4</button></li>
    <li class="page-item"><button class="page-link" onClick={() => {setPageSelected(5)}}>5</button></li>
    <li class="page-item"><button class="page-link" onClick={() => {setPageSelected(6)}}>6</button></li>
    <li class="page-item"><button class="page-link"><i class="fa fa-angle-right" onClick={()=>{setPageSelected(pageSelected +1)}}></i></button></li>
  </ul>
</nav>
  )
}
