import React from "react";

const termsAndConditions = {
  bookingRules: [
    "Rates are on a twin share basis (Non-AC & EP Plan).",
    "Applicable for adults aged 10 years and above.",
    "Children aged 5–9 years: ₹500 per night.",
    "Children aged 10 years and above: Considered as adults.",
    "Guests are required to present a printout of the booking confirmation email along with a photocopy of a valid photo ID at the time of check-in.",
    "For group bookings, the minimum payable amount at check-in will be the amount quoted at the time of reservation.",
    "Pets are not allowed on the property.",
  ],
  checkInOut: {
    checkIn: "12:00 PM",
    checkOut: "10:00 AM",
  },
  extraPersonCharges: {
    classicRooms: "₹1,000 per extra person, per night",
    deluxeHeritageRooms: "₹1,250 per extra person, per night",
    deluxeRooms: "₹1,250 per extra person, per night",
    premiumRooms: "₹1,500 per extra person, per night",
  },
  cancellationPolicy: [
    "In case of cancellations (natural or other reasons), the advance payment will be retained as credit for your next visit.",
    "No refunds will be issued.",
  ],
};

const TermsPage: React.FC = () => {
  return (
    <div className="sm:py-32 sm:px-[12%] px-4 py-14 large:px-[18%]">
      <div className="prose max-w-none text-secondary">

        {/* Booking Rules */}
        <section className="mb-8">
          <h2 className="text-4xl font-bold text-primary mb-4 font-ivy">Booking Rules</h2>
          <ul className="list-disc pl-6 space-y-2 font-albertSans">
            {termsAndConditions.bookingRules.map((rule, i) => (
              <li key={i}>{rule}</li>
            ))}
          </ul>
        </section>

        {/* Check-in & Check-out */}
        <section className="mb-8">
          <h2 className="text-4xl font-bold text-primary mb-4 font-ivy">
            Check-in & Check-out
          </h2>
          <p className="font-albertSans">
            Check-in: {termsAndConditions.checkInOut.checkIn}
          </p>
          <p className="font-albertSans">
            Check-out: {termsAndConditions.checkInOut.checkOut}
          </p>
        </section>

        {/* Extra Person Charges */}
        <section className="mb-8">
          <h2 className="text-4xl font-bold text-primary mb-4 font-ivy">
            Extra Person Charges
          </h2>
          <ul className="list-disc pl-6 space-y-2 font-albertSans">
            {Object.entries(termsAndConditions.extraPersonCharges).map(
              ([room, charge]) => (
                <li key={room}>
                  {room.replace(/([A-Z])/g, " $1")}: {charge}
                </li>
              )
            )}
          </ul>
        </section>

        {/* Cancellation Policy */}
        <section>
          <h2 className="text-4xl font-bold text-primary mb-4 font-ivy">
            Cancellation Policy
          </h2>
          <ul className="list-disc pl-6 space-y-2 font-albertSans">
            {termsAndConditions.cancellationPolicy.map((policy, i) => (
              <li key={i}>{policy}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default TermsPage;
