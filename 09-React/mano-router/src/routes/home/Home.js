import React from "react";
import Header from '../../components/header/Header'

const Home = () => {
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
                    <td>6 963,29</td>
                    <td>5 rampos</td>
                  </tr>
                  <tr>
                    <td>C</td>
                    <td>3 371,05</td>
                    <td>5 rampos</td>
                  </tr>
                  <tr>
                    <td>D</td>
                    <td>3 300,79</td>
                    <td>5 rampos bei 1 šoninė</td>
                  </tr>
                  <tr>
                    <td>E</td>
                    <td id="dviejuzonu" colspan="2">17,24 (bendrosios buitinės patalpos)</td>
                  </tr>
                </tbody>
              </table>
              <div class="background">
                <img src="./foto/pirmas.png" alt=""/>
              </div>
        </div>
        </div>
    )
}

export default Home