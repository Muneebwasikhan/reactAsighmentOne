import React, { Component } from 'react';
import Arrays from './arrays';
class NameComp extends Component {
  
    render() { 
        const name = "Hello World";
    const obj = {name: "Hello World Object"}
    const data = ['We', 'are', 'United'] //Show these in seperate tags
    const list = [{name: "Hello World 1"}, {name: "Hello World 2"}, {name: "Hello World 3"}] //Show these in seperate tags
    const complex = [{company: 'XYZ', jobs: ['Javascript', 'React']}, {company: 'ABC', jobs: ['AngularJs', 'Ionic']}]
    const cent ={
        textAlign: 'center'
    }
    return (
        <div className="container" style={cent}>
            <div className="Task-body">
                <p>{name}</p>
                <p>{obj.name}</p>     
                <table className="table table-bordered">
                    <tbody>
                        <tr>
                            {data.map((value)=>{
                                return <td key={value}>{value}</td>
                            })}
                        </tr>
                        <tr>
                            {list.map((value)=>{
                                return <td key={value.name}>{value.name}</td>
                            })}
                        </tr>
                    </tbody>
                </table>
                    {complex.map((data)=>{
                        return(
                            <table className="table table-bordered" key={data.company}>
                                <thead>
                                    <tr>
                                        <th colSpan="2" className="text-center">{data.company}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        {data.jobs.map((jobs)=>{
                                            return <td key={jobs}>{jobs}</td>
                                        })}
                                    </tr>
                                </tbody>
                            </table>
                        ) 
                    })}
                </div>


                <hr/>
                <div className="Task-body">
              <div className="row">
                  <div className="my-2 box col-md-6">
                    <h5>import Something from 'package':</h5>
                    <p>
                      When you export default (whether it is an object, a function, a class, etc.) then this import statement may then be used to import such defaults.
                      It is used to obtain the default exported module from the file. The module file might contain more than one module but only contain one default module.
                      When you import in this way, you are not required to put curly braces on the module name. This specifies that this import is default.
                    </p>
                  </div>
                  <div className="my-2 box col-md-6">
                    <h5>import &#123;Something&#125; from 'package:</h5>
                    <p>
                      When you export (whether it is an object, a function, a class, etc.) then this import statement may then be used to import such modules.
                      It is used to obtain the exported module from the file which is not default. The module file might contain more than one module but only contain one default module.
                      When you import in this way, you are required to put curly braces on the module name. This specifies that this import isn't default.
                    </p>
                  </div>
                </div>
              </div>

<hr />

 <div>
                <div className="Task-body">
                    <h4 className="text-center">Posts:</h4>
                    <Arrays />              
                </div>
            </div>


            </div>
            
    );
  }
}
 
export default NameComp;