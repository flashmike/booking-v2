import React, { Component } from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Billing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roomCharge: 0,
      //occupantCharges: 0,
      parkFees: 82.60,
      totalParkFees: 0,
      totalRoomCharges: 0,
      totalOccupantCharges: 0,
      ttdl: 13.99,
      totalttdl: 0,
      discount: 0,
      grandTotal: 0,
      vat18: 0,
    };
  }

  static getDerivedStateFromProps(props, state) {
    const { roomType, totalDays, occupants } = props;

    const roomCharge = roomType === "Tent" ? 1399 : 4197;
    const roomChargeFinal = roomCharge.toFixed(2);
    //const roomChargeFinal = roomCharge.toLocaleString('en-US',{maximumFractionDigits: 2}); //roundoff
    //const roomChargeFinalFormat = roomChargeFinal.toLocaleString('en-US');
    //const parkFees = occupants === 1 ? 0 : (occupants - 1) * 82.60;
    const parkFees = 82.60;
    const totalParkFees = parkFees * occupants;
    const parkFeesFinal = totalParkFees.toFixed(2);
    const concessionFees = 59;
    const totalConcessionFees = concessionFees * occupants;
    const concessionFeesFinal = totalConcessionFees.toFixed(2);
    const ttdl = 13.99;
    const totalttdl = ttdl * occupants;
    const totalttdlFinal = totalttdl.toFixed(2);
    const totalRoomCharges = totalDays * roomCharge;
    const totalRoomChargesFinal = totalRoomCharges.toFixed(2);
    const totalOccupantCharges = (totalParkFees + totalConcessionFees + totalttdl) * totalDays;
    const totalOccupantChargesFinal = totalOccupantCharges.toFixed(2);

    const discount = totalDays >= 4 ? 10 : 0;
    const grandTotal = Math.ceil(
      totalRoomCharges - (totalRoomCharges * discount) / 100.0
    );
    const grandTotalFinal = grandTotal.toFixed(2);

    const totalBooking = roomCharge + totalOccupantCharges;
    const totalBookingFinal = totalBooking.toFixed(2);

    const vat18 = (totalOccupantCharges + grandTotal) * 0.18;
    const vat18Final = vat18.toFixed(2);

    const bookingWithTax = (totalOccupantCharges + grandTotal) * 1.18;
    const bookingWithTaxFinal = bookingWithTax.toFixed(2);

    return {
      roomChargeFinal,
      parkFees,
      totalRoomChargesFinal,
      totalOccupantCharges,
      parkFeesFinal,
      concessionFeesFinal,
      totalttdlFinal,
      totalOccupantChargesFinal,
      discount,
      grandTotalFinal,
      totalBookingFinal,
      vat18Final,
      bookingWithTaxFinal,
    };
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <h2>Summary</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <table>
                <tbody>
                  <tr>
                    <td><strong>Room Charges</strong></td>
                    <td>$ {this.state.roomChargeFinal}</td>
                  </tr>
                  <tr>
                    <td><strong>Nights</strong></td>
                    <td>{this.props.totalDays} night/s</td>
                  </tr>

                  <tr>
                    <td><strong>Total Room Charges</strong></td>
                    <td>$ {this.state.totalRoomChargesFinal}</td>
                  </tr>

                  <tr>
                    <td><strong>Discount</strong></td>
                    <td>{this.state.discount} %</td>
                  </tr>

                  <tr>
                    <td><strong>Booking Total With Discount</strong></td>
                    <td><strong>$ {this.state.grandTotalFinal}</strong></td>
                  </tr>

                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>

                  <tr>
                    <td><strong>Total Occupants</strong></td>
                    <td>{this.props.occupants}</td>
                  </tr>

                  <tr>
                    <td><strong>Park Fees</strong></td>
                    <td>$ {this.state.parkFeesFinal}</td>
                  </tr>

                  <tr>
                    <td><strong>Concession Fees</strong></td>
                    <td>$ {this.state.concessionFeesFinal}</td>
                  </tr>

                  <tr>
                    <td><strong>TTDL</strong></td>
                    <td>$ {this.state.totalttdlFinal}</td>
                  </tr>

                  <tr>
                    <td><strong>Total Goverment Fees</strong></td>
                    <td><strong>$ {this.state.totalOccupantChargesFinal}</strong></td>
                  </tr>

                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>

                  <tr>
                    <td><strong>Total Booking:</strong></td>
                    <td>$ {this.state.totalBookingFinal}</td>
                  </tr>

                  <tr>
                    <td><strong>VAT 18%:</strong></td>
                    <td>$ {this.state.vat18Final}</td>
                  </tr>

                  <tr>
                    <td><h5><strong>Grand Total</strong></h5></td>
                    <td><h5><strong>$ {this.state.bookingWithTaxFinal}</strong></h5></td>
                  </tr>
                </tbody>
              </table>
            </Col>
          </Row>
        </Container>


      </div>
    );
  }
}

export default Billing;
