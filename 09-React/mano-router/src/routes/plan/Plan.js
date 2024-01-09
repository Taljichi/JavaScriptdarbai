import React from "react";
import Header from '../../components/header/Header'

const Plan = () => {
    return (
        <div className="container">
        <Header />
        <div class="tables">
            <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Sandėlio zona</th>
                    <th scope="col">Sandėlio plotas, kv. m</th>
                    <th scope="col">Rampos</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>B</td>
                    <td>92,92</td>
                    <td>578,50</td>
                  </tr>
                  <tr>
                    <td>C</td>
                    <td>151,04</td>
                    <td>390,46</td>
                  </tr>
                  <tr>
                    <td>D</td>
                    <td>151,78</td>
                    <td>390,46</td>
                  </tr>
                </tbody>
              </table>
              <div class="background">
                <img src="./foto/antras.png" alt=""/>
              </div>
        </div>
        </div>
    )
}

export default Plan