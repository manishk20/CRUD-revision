import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Read () {

    const [dataList, setDataList] = useState([]);

    useEffect(() => {
        fetchAllData ();
    }, []);

    const fetchAllData = async () => {
        try {
            setDataList([]);
        } catch (error) {
            console.error(error);
        }
    }

    return (<>
        <div className="container mt-4">
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>John</td>
            <td>Doe</td>
            <td>john.doe@example.com</td>
            <td>(123) 456-7890</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jane</td>
            <td>Smith</td>
            <td>jane.smith@example.com</td>
            <td>(098) 765-4321</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Sam</td>
            <td>Brown</td>
            <td>sam.brown@example.com</td>
            <td>(555) 555-5555</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Lisa</td>
            <td>White</td>
            <td>lisa.white@example.com</td>
            <td>(444) 444-4444</td>
          </tr>
        </tbody>
      </table>
    </div>
    </>
    )
}