import { Component } from "react";

export default class Sidebar extends Component {
  render() {
    const { navigateTo } = this.props;

    return (
      <div
        className="bg-primary text-white p-4 shadow"
        style={{ width: 300, minHeight: "100dvh" }}
      >
        <div className="font-logo text-center mb-5">
          <h2>
            <i>
              <b>Turing</b> Shop
            </i>
          </h2>

          <h2 className="fs-6 my-4 font-primary fw-bold">Backoffice V1.0.0</h2>
        </div>

        <nav>
          <ul className="d-flex flex-column gap-3 nav-list list-unstyled">
            <p className="cursor-pointer fw-bold">Dashboard</p>
            <li
              className="cursor-pointer text-white"
              data-bs-toggle="collapse"
              data-bs-target="dashboard-collapse"
              aria-expanded="true"
            ></li>
          </ul>
        </nav>
      </div>
    );
  }
}
