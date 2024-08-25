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
            <th scope="col">S no.</th>
            <th scope="col">Title</th>
            <th scope="col">Note Content</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>John</td>
            <td>Doe</td>
            <td>john.doe@example.com</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jane</td>
            <td>Smith</td>
            <td>jane.smith@example.com</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Sam</td>
            <td>Brown</td>
            <td>sam.brown@example.com</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Lisa</td>
            <td>White</td>
            <td>lisa.white@example.com</td>
          </tr>
        </tbody>
      </table>
    </div>
    </>
    )
}