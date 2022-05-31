import './App.css';
import 'antd/dist/antd.min.css';
import {Button, DatePicker, Result, version} from "antd";
import { Skeleton } from 'antd';


function App() {

    const ExtraHtml = () => {
      return(
          <div>
              <h1>Hello</h1>
              <DatePicker />
              <Button type="primary" style={{ marginLeft: 8 }}>
                  Primary Button
              </Button>
          </div>
      )
    }
  return (
    <div className="App">

      <h1>antd version: {version}</h1>
      <DatePicker />
      <Button type="primary" style={{ marginLeft: 8 }}>
        Primary Button
      </Button>

        <Result
            status="403"
            title="403"
            subTitle="Sorry, you are not authorized to access this page."
            extra={<ExtraHtml/>}
        />,
        <Skeleton />

    </div>
  );
}

export default App;
