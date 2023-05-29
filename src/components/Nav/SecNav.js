import { useState } from 'react'
import './SecNav.css'
import Filter from './Filter'
import { Button } from 'react-bootstrap'

const SecNav = ({setPropertiesState}) => {
  const [AddModalState,setAddModal] = useState(null)
  const handleAddModalClose = ()=>setAddModal(null);
  const handleAddModalOpen = (index)=>setAddModal(index);

  return (
    <>
      <Button className='secNavBar'
        variant="outline-secondary"
        onClick={handleAddModalOpen}
      >
        Filter
      </Button>
      {AddModalState && (
        <Filter
          show={true}
          handleClose={handleAddModalClose}
          filterData={setPropertiesState}
        />
      )}
    </>
  );
}
export default SecNav