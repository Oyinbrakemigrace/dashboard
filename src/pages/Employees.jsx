import React from 'react'
import { GridComponent, ColumnDirective, Page, Inject, ColumnsDirective, Search, Toolbar } from '@syncfusion/ej2-react-grids'
import { employeesData, contextMenuItems, employeesGrid } from '../data/dummy'
import { Header } from '../components'



function Employees() {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header title="Employees" category='Page' />
      <GridComponent
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={['Search']}
        width="auto"
      >
        <ColumnsDirective>
          {
            employeesGrid.map((order, index) => (
              <ColumnDirective key={index} {...order} />
            )
            )
          }
        </ColumnsDirective>
        <Inject services={[ Page, Search, Toolbar]} />
      </GridComponent>
    </div>
  )
}

export default Employees