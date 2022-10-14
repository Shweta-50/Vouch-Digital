import React from 'react'
import Form from "react-bootstrap/Form";
import Dropdown from 'react-bootstrap/Dropdown';
import InputGroup from "react-bootstrap/InputGroup";
import { AiOutlineSearch} from 'react-icons/ai';
import {FiDownload} from 'react-icons/fi';
import {BsThreeDotsVertical} from 'react-icons/bs';
import Pagination from 'react-bootstrap/Pagination';
import './view.scss';
const ViewClient = () => {
  return (
    <div className="view-client ">
      <div className="row bg-white align-items-center  ">
        <div className="searchbar col-md-4">
        <InputGroup className="mb-3 d-flex mt-3 ">
                  <InputGroup.Text className="ms-2" id="basic-addon1"><AiOutlineSearch/></InputGroup.Text>
                  <Form.Control
                    placeholder="Search modules"
                    aria-label="text"
                    type="text"
                    className=" view-input shadow-none "
                  />
        </InputGroup>
        </div>
        <div className="buttons col-md-3 ms-auto d-flex justify-content-end ">
        <Dropdown>
      <Dropdown.Toggle className="columns-btn" >
        Columns
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <button type="button" class="btn ms-2 me-2"><FiDownload/> Export</button>
        </div>
    <div class="table-container bg-light ">
          <table class="table table-hover">
    <thead>
      <tr className="">
        <th>Company Name</th>
        <th>Email Address</th>
        <th>Phone No</th>
        <th>Contact Person</th>
        <th>Facilitator</th>
        <th>Sites</th>
        <th>Tenants</th>
        <th>Tenant Groups</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><img className="rounded-circle me-2"  alt="100x100" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
          data-holder-rendered="true"/> Infosys</td>
        <td>management@infosys.com</td>
        <td>+91 9563214587</td>
        <td>Vijayent Roy </td>
        <td>--</td>
        <td>12</td>
        <td>--</td>
        <td>--</td>
        <td><BsThreeDotsVertical/></td>
      </tr>
      <tr>
        <td><img className="rounded-circle me-2"  alt="100x100" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
          data-holder-rendered="true"/> Wipro</td>
        <td>management@wipro.com</td>
        <td>+91 9834687423</td>
        <td>Kalpit Soni </td>
        <td>--</td>
        <td>8</td>
        <td>--</td>
        <td>--</td>
        <td><BsThreeDotsVertical/></td>
      </tr>
      <tr>
        <td><img className="rounded-circle me-2"  alt="100x100" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
          data-holder-rendered="true"/> Accenture </td>
        <td>management@accenture .com</td>
        <td>+91 8732654789</td>
        <td>Drishti Sane </td>
        <td>--</td>
        <td>4</td>
        <td>--</td>
        <td>--</td>
        <td><BsThreeDotsVertical/></td>
      </tr>
      <tr>
        <td><img className="rounded-circle me-2"  alt="100x100" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
          data-holder-rendered="true"/> Capgemini </td>
        <td>management@capgemini .com</td>
        <td>+91 8432657995</td>
        <td>Aisha Keer  </td>
        <td>--</td>
        <td>6</td>
        <td>--</td>
        <td>--</td>
        <td><BsThreeDotsVertical/></td>
      </tr>
      <tr>
        <td><img className="rounded-circle me-2"  alt="100x100" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
          data-holder-rendered="true"/> Lodha</td>
        <td>management@lodha.com</td>
        <td>+91 9642357894</td>
        <td>Kanika Khare </td>
        <td>--</td>
        <td>24</td>
        <td>16</td>
        <td>--</td>
        <td><BsThreeDotsVertical/></td>
      </tr>
      <tr>
        <td><img className="rounded-circle me-2"  alt="100x100" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
          data-holder-rendered="true"/> TCS</td>
        <td>management@tcs.com</td>
        <td>+91 9632457468</td>
        <td>Prabhat Rao </td>
        <td>--</td>
        <td>10</td>
        <td>--</td>
        <td>--</td>
        <td><BsThreeDotsVertical/></td>
      </tr>
      <tr>
        <td><img className="rounded-circle me-2"  alt="100x100" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
          data-holder-rendered="true"/> HCL</td>
        <td>management@hch.com</td>
        <td>+91 9452136487</td>
        <td>Venkat Pant</td>
        <td>--</td>
        <td>5</td>
        <td>2</td>
        <td>1</td>
        <td><BsThreeDotsVertical/></td>
      </tr>
      <tr>
        <td><img className="rounded-circle me-2"  alt="100x100" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
          data-holder-rendered="true"/> Redington </td>
        <td>management@redington .com</td>
        <td>+91 9326571865</td>
        <td>Samir Yadav </td>
        <td>--</td>
        <td>1</td>
        <td>1</td>
        <td>--</td>
        <td><BsThreeDotsVertical/></td>
      </tr>
      <tr>
        <td><img className="rounded-circle me-2"  alt="100x100" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
          data-holder-rendered="true"/> Mphasis </td>
        <td>management@mphasis .com</td>
        <td>+91 9563214587</td>
        <td>Sweta Chawla</td>
        <td>--</td>
        <td>1</td>
        <td>--</td>
        <td>--</td>
        <td><BsThreeDotsVertical/></td>
      </tr>
      <tr>
        <td><img className="rounded-circle me-2"  alt="100x100" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
          data-holder-rendered="true"/> Larsen & Toubro</td>
        <td>management@larsentoubro.com</td>
        <td>+91 9547154964</td>
        <td>Abhishek Kumar</td>
        <td>--</td>
        <td>16</td>
        <td>--</td>
        <td>--</td>
        <td><BsThreeDotsVertical/></td>
      </tr>
    </tbody>
   
  </table>
  
</div>


      </div>
      <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Ellipsis />

      <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Item>{11}</Pagination.Item>
      <Pagination.Item active>{12}</Pagination.Item>
      <Pagination.Item>{13}</Pagination.Item>
      <Pagination.Item disabled>{14}</Pagination.Item>

      <Pagination.Ellipsis />
      <Pagination.Item>{20}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
      
    </div>
  )
}

export default ViewClient