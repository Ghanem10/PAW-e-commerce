import React, { useState } from 'react';

/** Styleing */
import '../assets/scss/intro/_subscription.scss';
import '../assets/scss/payment_form/_stripe_form.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCheck } from '@fortawesome/free-solid-svg-icons';
import StripeProvider from '../component/payment/stripe';
import Navbar from '../component/nav/navbar';

export default function Subscription(): React.JSX.Element {

    document.title = "Subscription | E-commerce";

    const [totleEvents, setTotalEvents] = useState<number>(10000);
    const [subFee, setSubFee] = useState<number>(5);
    const [selected, setSelected] = useState<string>("");
    const [payment, setPayement] = useState<boolean>(false);

    const updateTotaleEventsMonthly = (): void => {

        setSelected("monthly");
        setSubFee(pre => pre / 10)

        if(totleEvents >= 10000) {
            setTotalEvents(totleEvents / 10);
        }
    };

    const updateTotaleEventsYearly = (): void => {

        setSelected("yearly");

        setSubFee(pre => pre * 10);

        if (totleEvents <= 100000) {
            setTotalEvents(totleEvents * 10);
        }
    };

    const requestPayment = (): void => {
        setPayement(true)
    };

    return (
        <>

            {payment && (
                <div className='payment-element-bg'>
                    <StripeProvider setPayment={setPayement} />
                </div>
            )}

        
            <section>
                <Navbar dir=''/>
                <div className='subscription-page-main'>
                    <div className='subscription-header'>
                        <h1>Simple, traffic-based pricing</h1>
                        <p>
                            Try E-commerce on your website for 14 days - completely free of charge.
                            No credit card required. No strings attached.
                        </p>
                    </div>
                    <div className='subscription-body-form'>
                        <div className='subscription-form-events'>
                            <span>{totleEvents.toLocaleString()}</span>
                            <span>Events per month</span>
                        </div>
                        <div className='subscription-form-buttons'>
                            <button 
                                disabled={subFee === 5}
                                onClick={updateTotaleEventsMonthly}
                                style={{
                                    backgroundColor: `${(selected === "monthly" || selected === "") ? "#ffc107" : ""}`  
                                }}
                            >
                                Monthly
                            </button>
                            <button 
                                disabled={subFee === 50}
                                onClick={updateTotaleEventsYearly}
                                style={{
                                    backgroundColor: `${(selected === "yearly") ? "#ffc107" : ""}`  
                                }}
                            >
                                Yearly
                            </button>
                        </div>
                    </div>
                    <div className='subscription-form'>
                        <span>{subFee} $</span>
                        <h3>WHAT'S INCLUDED</h3>
                        <div className='subscription-form-ul'>
                            <ul>
                                <li><FontAwesomeIcon icon={faCheck} id='icon-checked'/> Up to {totleEvents.toLocaleString()} visits per month</li>
                                <li><FontAwesomeIcon icon={faCheck} id='icon-checked'/> Add up to 50 websites</li>
                                <li><FontAwesomeIcon icon={faCheck} id='icon-checked'/> 50 alerting rules</li>
                                <li><FontAwesomeIcon icon={faCheck} id='icon-checked'/> User flow analysis</li>
                                <li><FontAwesomeIcon icon={faCheck} id='icon-checked'/> Unlimited data exports</li>
                                <li><FontAwesomeIcon icon={faCheck} id='icon-checked'/> 100% data ownership</li>
                                <li><FontAwesomeIcon icon={faCheck} id='icon-checked'/> Performance monitoring</li>
                                <li><FontAwesomeIcon icon={faCheck} id='icon-checked'/> Shared & Public Dashboards</li>
                                <li><FontAwesomeIcon icon={faCheck} id='icon-checked'/> Email reports</li>
                            </ul>
                            <ul>
                                <li><FontAwesomeIcon icon={faCheck} id='icon-checked'/> Add up to 50 websites</li>
                                <li><FontAwesomeIcon icon={faCheck} id='icon-checked'/> 50 alerting rules</li>
                                <li><FontAwesomeIcon icon={faCheck} id='icon-checked'/> User flow analysis</li>
                                <li><FontAwesomeIcon icon={faCheck} id='icon-checked'/> Unlimited data exports</li>
                                <li><FontAwesomeIcon icon={faCheck} id='icon-checked'/> 100% data ownership</li>
                                <li><FontAwesomeIcon icon={faCheck} id='icon-checked'/> Performance monitoring</li>
                                <li><FontAwesomeIcon icon={faCheck} id='icon-checked'/> Shared & Public Dashboards</li>
                            </ul>
                        </div>
                        <button 
                            onClick={requestPayment}
                            className='subscription-form-button-plan'
                        >
                            Start a plan <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}