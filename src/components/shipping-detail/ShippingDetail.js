import React from "react";

import {
  getShippingRegions,
  getShippingCostAndDaysByRegionId
} from "../../data/request-handler";

import arrowDown from "../../assets/menu-down.png";
import "./shipping-detail.css";

class ShippingDetail extends React.Component {
  state = {
    shippingRegions: [],
    selectedRegion: "",
    shippingCostAndDays: []
  };

  render() {
    return (
      <div className="shipping-detail-container">
        <h2>Shipping Details</h2>
        <div>{this.renderDropdownFilter()}</div>
        <div>{this.renderShippingCostAndDays()}</div>
      </div>
    );
  }

  componentDidMount() {
    getShippingRegions()
      .then(response => {
        console.log(response);
        this.setState({
          shippingRegions: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleRegionClick = (id, region) => {
    if (id === 1) return;

    getShippingCostAndDaysByRegionId(id)
      .then(response => {
        this.setState({
          shippingCostAndDays: response.data,
          selectedRegion: region
        });
      })
      .catch(err => console.log(err));
  };

  renderDropdownFilter = () => {
    return (
      <div className="dropdown">
        <button className="dropbtn">
          Select Region
          <img src={arrowDown} alt="menu-down" className="arrow-menu" />
        </button>

        <div className="dropdown-content">
          {this.state.shippingRegions.map(region => {
            const { shipping_region_id, shipping_region } = region;
            return (
              <div className="region-item" key={shipping_region_id}>
                <button
                  className="link-submenu"
                  onClick={() =>
                    this.handleRegionClick(shipping_region_id, shipping_region)
                  }
                >
                  {shipping_region}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  renderShippingCostAndDays = () => {
    return (
      <>
        <div className="selected-region-content">
          <span>{this.state.selectedRegion}</span>
        </div>
        <div className="shipping-days-cost-container">
          {this.state.shippingCostAndDays.map(data => {
            const { shipping_id, shipping_type } = data;
            return (
              <div key={shipping_id}>
                <span>{shipping_type}</span>
              </div>
            );
          })}
        </div>
      </>
    );
  };
}

export default ShippingDetail;
