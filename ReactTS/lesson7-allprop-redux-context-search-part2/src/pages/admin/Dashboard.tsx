import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import SingleTable from '../../components/admin/SingleTable';

const Dashboard:React.FC=()=> {
  const selectdata:any = useSelector(state => state);

  return (
    <>
      <h1 className='my-5 text-center'>Admin Panel</h1>
     <LinkContainer to="add">
     <Button variant='danger'>Add blog</Button>
     </LinkContainer>
      <Table striped bordered hover className='mt-5'>
        <thead>
          <tr>
            <th>#</th>
            <th>Photo</th>
            <th>Title</th>
            <th>Description</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {selectdata.map((item:any, i:number) => {
            return <SingleTable 
            count={i} 
            key={i} 
            title={item.title} 
            desc={item.desc} 
            id={item.id} 
            photo={item.photo} />
          })}
        </tbody>
      </Table>

    </>
  );
}

export default Dashboard;