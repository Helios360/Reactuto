import Table from 'react-bootstrap/Table';

const BasicExample = ({dishes}) => {
    return (
      <Table>
        <thead>
          <tr>
            <th>#id</th>
            <th>Caption</th>
            <th>Title</th>
            <th>Price (€)</th>
            <th>New</th>
          </tr>
        </thead>
        <tbody>
          {dishes.map((dish) => (
            <tr key={dish.id}>
              <td>{dish.id}</td>
              <td>
                <img 
                  src={dish.img} 
                  alt={dish.title} 
                  className="h-200" 
                />
              </td>
              <td>{dish.title}</td>
              <td>{dish.price}</td>
              <td>{dish.isNew ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }

export default BasicExample;