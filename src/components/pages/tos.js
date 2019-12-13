import React from 'react'
import HeaderFooter from '../headerFooter'
import { Link } from 'react-router-dom'

import './pages.css'

const ToS = () => {
    return (
        <HeaderFooter>
            <div className='tos-header'>
                <h2>Terms of Service</h2>
            </div>
            <div className='tos-body'>
                <div className='py-1'>
                <h3>TRAVELERS, SENDERS AND RECIPIENTS</h3>
                <p className="mb-1">Please read these terms of service carefully as they contain important
                    information regarding your legal rights, remedies and obligations.
                    These include various limitations and exclusions, a clause that governs
                    the jurisdiction and venue of disputes, and obligations to comply with
                    applicable laws and regulations.</p>
                <p className="mb-2">Update: <b>{new Date().getFullYear()}</b></p>
                </div>

                <div className="py-1">
                    <h3>TERMS OF SERVICE</h3>
                    <p>If you are using the Site, Application or Services and you reside in the USA,
                        you are contracting with PKLoop Peer, henceforth referred to as (PKLoop, “Us,”,
                        “We” or “Our”). We are a platform that helps to create and connect the community
                        through the use of the PKLoop Site, Application or Services with respect to any
                        payments or payouts from or to you conducted through the Site, Application or
                        Services.</p>
                    <p>PKLoop provides an online platform that enables Travelers to connect with Customers
                        (“Senders”) seeking to send items with a Traveler (collectively, the “Services”),
                        AND PKLoop provides an online platform that enables Customers (“Senders”) to connect
                        with Travelers who are willing to transport (collectively, the “Services”) packages,
                        when Services are accessible at <Link to="/">https://www.mypkloop.com</Link> and any other websites
                        through which PKLoop makes the Services available (collectively, the “Site”) and as
                        applications for mobile devices (the “Application”). By using the Site or Application,
                        you agree to comply with and be legally bound by the terms and conditions of these
                        Terms of Service (“Terms”), whether or not you become a registered user of the
                        Services. These Terms govern your access to and use of the Site, Application and
                        Services and all Collective Content (defined below), and your participation in the
                        program (defined below), and constitute a binding legal agreement between you and
                        PKLoop. Please also read carefully our <Link to="/privacy">Privacy Policy</Link>. If you do not agree to these Terms, you have no right to obtain
                        information from or otherwise continue using the Site, Application or Services. Failure
                        to use the Site, Application or Services in accordance with these Terms may subject you
                        to civil and criminal penalties.</p>
                    <p>Members also acknowledge and agree that they are users of the PKLoop Site only,
                        and that they are not PKLoop employees, joint venturers, shareholders, partners,
                        or agents whatsoever. PKloop does not have the right to control and does not
                        control Members, or the relationships between them or the subject matter of such
                        relationships.</p>
                    <p>To promote the PKLoop Platform and to increase exposure to
                    potential Members, content from the PKLoop Site may be displayed on other websites,
                    applications, other communications (including email or SMS or other text message
                    services), and in online and offline advertisements. To assist Members who speak
                    other languages, content from the PKLoop Site may be translated, in whole or in part,
                    into other languages and where done so, PKLoop does not guarantee the accuracy or
                    quality of such translations and Members are responsible for reviewing and verifying
                    the accuracy of them.</p>
                </div>

                <div className="py-1">
                    <h4 className="mb-2">Eligibility</h4>
                    <p>The Site, Application and Services are intended solely for persons who are 18 or
                        older. Any access to or use of the Site, Application or Services by anyone under
                        18 is expressly prohibited. By accessing or using the Site, Application or Services,
                        you represent and warrant that you are 18 or older. </p>
                </div>

                <div className="py-1">
                    <h4 className="mb-2">How the Site, Application and Services Work</h4>
                    <p>The Site, Application and Services can be used to facilitate the listing of
                        traveler (PeerLoopee) services and arranging of and payment for transportation
                        of parcels. If you wish to list travel plans, you must first <Link to="/register">register</Link> to create
                        a PKLoop Account.  PKLoop makes available an online platform or marketplace with
                        related technology for travelers to list trips and Senders to place orders. PKLoop,
                        staff or employees, or affiliates are not the Senders.</p>
                    <p>To create a Member account, You must create a password-protected account (“Account”).
                        You may register for an Account by entering Your cell phone number, Your email and
                        creating a password, or by using your existing third party networking accounts that
                        are enabled by PKLoop now or in the future such as Google, or Facebook, Twitter or
                        others (“Third Party Networks”), if any. You agree to provide accurate, current and
                        complete information during the Account registration process and at all other times
                        when You use the PKLoop Site, and to continually update information sufficient to
                        keep it accurate, current and complete.</p>
                    <p className="mt-2 one-star">Senders and Travelers may be required to provide a photo
                        of their driver’s license or passport for identity confirmation. Travelers may also be
                        required to provide their Social Security number in order to receive payment to their
                        bank account and for tax purposes. Travelers list their air travel itinerary details
                        and how many checked bags or travel space are available for accepting packages.
                        Travelers must provide a US Bank account information to receive payment upon delivery.
                        PKLoop utilizes Stripe as it’s payment provider.</p>
                    <p className="mt-2 one-star">Traveler will receive notification if there is a
                        sender match up until 2 hours before traveler’s departure. Using the in app/site
                        messenger; PKLoop Travelers and Senders will coordinate and arrange parcel exchange
                        and pickup at a predetermined location preferably a public space such as their
                        departure/destination airport.</p>
                    <p className="py-2 two-star">The sender has to guarantee that the item’s recipient
                    will be present at the agreed time and place of delivery</p>
                    <p>Travelers can view their earnings balance at any time in their account. Travelers
                        may enter a valid U.S. bank account and request a withdrawal at any time. Funds are
                        usually available within 1 to 3 days of a confirmed delivery. We deter traveler
                        theft of goods by processing a $0.01 collateral HOLD on traveler's commission
                        payout credit card or bank account </p>
                </div>

                <div className="py-1">
                    <h4 className="mb-2">Transactions Between Senders and Travelers on PKLoop</h4>
                    <p>PKLoop strives to make the PKLoop site useful, simple and efficient. PKLoop Senders
                        located globally may gain access to members who have better availability, travel
                        opportunities and who may be fully willing to bring packages to other PKLoop
                        members. Through PKLoop, the site helps to bring diverse groups of people together,
                         and hopefully, to minimize the differences and divisions resulting over time,
                         geographical distance and cultures.</p>
                    <p>A typical transaction facilitated on the PKLoop site, the Sender
                    searches for Travelers based on travel dates and airport or location. Interested
                    Travelers or Travelers matched by the PKLoop site, may then accept offers to bring
                    packages on terms expressed between Members in a “Request” or “Traveler’s Offer.” When
                    agreed upon, payment collection or execution, fixes the final and binding agreement
                    between the Members (PKLoop List).</p>
                </div>

                <div className="py-1">
                    <h4 className="mb-2">The Sender Request</h4>
                    <p>The Sender’s Request is made when the Sender uses the PKLoop Site search tool to</p>
                    <ul className="py-1 mb-1">
                        <li>describe the package specifically including the weight;</li>
                        <li>to add the location (City and Country) where the Sender is and where their recipient is, and</li>
                        <li>to add the desired send/receipt date. </li>
                    </ul>
                    <p>PKLoop advises Senders to be as specific as possible, and provides a place to “Include a Note to Your Traveler” to help ensure that a Traveler understands their deadline if any. Senders will not send or attempt to send Prohibited Items.</p>
                </div>

                <div className="py-1">
                    <h4 className="mb-2">Suggested Traveler Fees</h4>
                    <p>When the Sender creates a Request, the PKLoop site may auto-calculate a suggested,
                        optimal Traveler Fee, for illustrative purposes in planning the Sender’s
                        transaction. As explained below in the section “Fees,” the actual Traveler Fee on
                        any given transaction is set entirely by the Traveler and may be more than the
                        suggested Traveler Fee.</p>
                    <p>To assist Members to locate and communicate with each other, including potentially
                        dates upon which Members can meet in person, The PKLoop site allows Travelers to
                        enter the details of upcoming travel dates, and to browse published Sender’s
                        Requests made by a PKLoop member. Travelers can indicate their preference to be
                        notified of upcoming Requests that may correspond to their planned trips, or trips
                        that they may be willing to take.</p>
                </div>

                <div className="py-1">
                    <h4 className="mb-2">Traveler/Sender Requirements</h4>
                    <p>Users are required to be at least 18 years old, be a U.S. citizen or resident,
                        and have a valid U.S. bank account. Travelers/Senders may be required to upload
                        a copy of their U.S. issued driver’s license or passport.</p>

                    <h4 className="mb-1 colorless">Definitions</h4>
                    <p><span>PKLoop List </span>means any shipping
                    document, label, electronic entry or similar item used in the PkLoop system for the
                    services described in these terms and conditions. Originals must be used (photocopies
                    are not accepted).</p>

                    <p><span>Billable Weight </span>mean the weight used
                    to calculate the rate. The billable weight is the greater of the actual or dimensional
                    weight.</p>

                    <p><span>Business Day </span>means Monday through
                    Friday except for the following U.S. holidays: Memorial Day, New Year’s Day, Independence
                    Day, Labor Day, Thanksgiving Day and Christmas Day</p>

                    <p><span>Customer or Sender </span>means the person
                    whose name is listed on the PKLoop List as the sender.</p>

                    <p><span>Parcel </span>means any single package or
                    piece with a chargeable weight of 50 lbs. or less. Any fraction of a pound is rounded
                    up to the next-higher pound.</p>

                    <p><span>Recipient or Consignee </span>means the
                    person whose name is listed on the PKLoop List as the recipient. </p>

                    <p><span>Packages </span>means one or more pieces,
                    such as parcels or luggage, moving on a PKLoop List. “You” or “your” means the Traveler,
                    Sender, Recipient and/or their agents, servants, employees, and any other person or
                    entity having or claiming an interest in a package.</p>

                    <p><span>Non-Waiver </span>is any failure by us to
                    enforce or apply a term, condition or provision of the PKLoop Service Guide does not
                    constitute a waiver of that term, condition or provision and does not otherwise impair
                    our right to enforce such term, condition or provision. Services in violation of these
                    Terms may subject you to civil and criminal penalties.</p>
                </div>

                <div className="py-1">
                    <h4>Account Registration, Member Verification and Other Member Representations And Warranties</h4>
                    <p>To access some of our features and services, You will need to validly register for
                        an account and to become a Member. You are only eligible to have one (1) Account at
                        a time, and are not allowed to transfer Your account at any time to another person
                        or entity. As indicated above, by doing so, you represent and warrant that you are
                        over the age of eighteen (18) and are capable of entering into legally binding
                        agreements in the relevant jurisdiction(s).</p>
                    <p>You also represent and warrant that You will comply with any and all applicable
                        import and export control laws or customs laws in Your local jurisdiction. You
                        also represent and warrant that (i) neither You nor the subject of Your transaction
                        (i.e. packages) is the subject of a United States or other country’s embargo, or
                        that it has been designated by the United States Government as a “terrorist
                        supporting” country and that (ii) You are not listed on any United States Government
                        or any other country’s list of prohibited or restricted parties.</p>
                    <p>You and You alone are responsible for safeguarding your PKLoop Account password and other information, if applicable to a Third Party Network, and You are solely responsible for all activity that occurs on or through your Account or Third Party Network created account and that You will immediately inform PKLoop of any suspected unauthorized use. PKLoop is not liable or otherwise responsible for any loss or damage that any party claims is caused in whole or part by unauthorized use of Your Account. Notwithstanding the foregoing, You may, however, be liable or responsible to PKLoop or third parties due to unauthorized use of Your Account.</p>
                    <p>You acknowledge and agree that, as permitted by applicable laws, PKLoop may in its sole discretion, but is not obligated to, obtain reports from consumer reporting agencies or otherwise review publicly available information about Members, including sexual offender registration lists or databases compiling information about criminal convictions relating to, without limitation, crimes of violence, theft, burglary, conspiracy, abuse, neglect, fraud, dishonesty, perjury, forgery, embezzlement, cybercrimes, identity theft, drug related offense, obstruction, organized crime, prostitution, warrant violations, weapons offenses and crimes which endanger the life or property of others. By accessing or using the PKLoop Site, you authorize us to use Your personal information (including name, address, date of birth or other identifying information) to obtain these reports and agree that we may, in our sole discretion suspend, cancel, block, restrict or terminate Your access to the PKLoop Site based upon Our evaluation of such reports, again in our sole discretion. If we undertake an effort to verify Your background through these or other methods (which we are not obligated to do under these Terms), and choose to identify you as “Verified,” such a notation shall mean nothing other than that You completed a verification or identification process and shall not constitute an endorsement of You or any other Member to the public or to any Member.</p>
                </div>

                <div className="py-1">
                    <h4>SMS or Text Messaging</h4>
                    <p>By creating an Account, and becoming a Member, You agree that the We may send you text (SMS) messages as part of the normal business operation of Your use of the PKLoop Site. Such uses include without limitation, to provide You with information you requested from PKLoop or its Members, to let you know about features, functions, improvements or changes to the Platform, to facilitate Your identification of desired Members or Members who may be able willing to discuss parcel transportation, or other aspects of your Account.</p>
                    <p>These text (SMS) messages may be automated or non-automated, and while PKLoop does not charge You to send or receive such messages, message and data rates may still apply by your carrier or other provider. You may opt-out of receiving text (SMS) messages from Us at any time by contacting our Support team. You acknowledge that opting out of receiving text (SMS) messages may impact Your use of and ability to fully use the PKLoop Site.</p>
                </div>

                <div className="py-1">
                    <h4>Prohibited Conduct</h4>
                    <p>Regardless of whether you access or use the PKLoop Site with or without an account, by accessing, searching on or using the PKLoop Site in any way, You agree that will not:</p>
                    <ul>
                        <li>Use another person’s Account, to misrepresent yourself, Your identity or qualifications or transactions;</li>
                        <li>Violate any federal, state, local, national or international law, or any rule, regulation, tariff or duty, including customs laws or regulations that may apply to You or to Your relationship with other Members.</li>
                        <li>Transmit more request messages through the PKLoop website in a given period of time than a human can reasonably produce in the same period by using a conventional online web browser;</li>
                        <li>Use any automated system including but not limited to robots, spiders, offline readers, crawlers, scrapers to access, copy, maintain or compile the PKLoop Site or content thereon for any purpose without PKLoop’s prior written approval;</li>
                        <li>Take any action that (a) may unreasonably encumber PKLoop’s website or app infrastructure; (b) interferes or attempts to interfere with the proper working of the Site or any third-party participation; bypasses measures that are used to prevent or restrict access to the site; (d) circumvents, disables or otherwise interferes with security features of the site; (e) distributes viruses or any other technologies that may harm PKLoop or its users; (f) uses the site in a way that violates any copyrights, trade secrets, or other rights of any third party, including privacy or publicity rights; or (g) circumvents or manipulates and fees, fee structure or billing claimed or owed as a result of interaction, relationships or transactions that may be facilitated on PKLoop;</li>
                        <li>In any manual or automated way copy, appropriate, use or disclose any copyrighted text, or other intellectual property, rights of publicity, privacy or contract rights or otherwise misuse or misappropriate PKLoop’s information or content including but not limited to, use on a mirrored, competitive, or third-party site; </li>
                        <li>As a Member, use PKLoop in any manner that circumvents Your obligation to pay PKLoop or another Member as agreed; You acknowledge and agree that, except where these Terms provide otherwise, it is the Members themselves who establish any applicable Traveler Fees.</li>
                        <li>“Stalk,” or harass or intimidate any other Member or user of the site; or collect, harvest or publish any personally identifiable data including but not limited to names or other account information, from the site, or use the communication systems provided by the site for any reason not explicitly authorized by these Terms, including but not limited to commercial solicitation purposes;</li>
                        <li>Recruit, solicit, or contact in any form Members for employment or any other use not specifically intended by PKLoop;</li>
                        <li>Take any inappropriate or unlawful actions, including the submission of inappropriate or unlawful content to or through PKLoop, including without limitation content that is hateful, illegal, profane, obscene, defamatory, threatening, or discriminatory, or that advocates, promotes, or encourages inappropriate activity, conduct that would be considered a criminal offense, or conduct that would give rise to civil liability or violate any law;</li>
                        <li>Violate any PKLoop policies that govern or relate to Your use of the site and interactions with You and third parties;</li>
                        <li>Take any action that may undermine the efficacy or accuracy of reviews or ratings systems maintained by US and which relate to Members;</li>
                        <li>to fail to perform as agreed upon by Members;</li>
                        <li>Engage in fraudulent conduct including but not limited to entering into a relationship with another Member to obtain and/or bring packages with no intention of following through, theft, offering to make prohibited money transfers or to arrange to obtain and/or bring packages that are prohibited by applicable law at places of disembarkation, transit or embarkation or entering into any relationship fraudulently or for fraudulent purpose or to conclude your arrangement off PKLoop or to circumvent or evade the site or to evade any other requirement of these Terms;</li>
                        <li>Registering for more than one (1) Account or registering for an Account on behalf of an individual other than Yourself or transferring or purporting to transfer your PKLoop Account to any other person.</li>
                        <li>Undertake any activity or engage in any conduct that is inconsistent with the business or purpose of PKLoop; and</li>
                        <li>While PKLoop may help facilitate disputes, We have no control over and do not guarantee (i) the existence, quality, safety, suitability, or legality of any Item arranged between Members, (ii) the truth, accuracy or suitability of any description or any other aspect referred to by Members on the PKLoop Site, (iii) the performance or conduct of any Member or third party or (iv) the legality or compliance with laws, rules, regulations, orders and decisions that may be applicable to any relationship between Members or the subject matter thereof. While we may provide information that may be helpful in assisting you to evaluate another Member, and their status in the PKLoop community, PKLoop does not endorse any particular Member or any parckages. Any reference to a Member being “Verified” (or similar language) only indicates that the Member has completed a verification or identification process and nothing else.</li>
                    </ul>
                </div>

                <div className="py-1">
                    <h4>Modification or Changes to the PKLoop Site, the Terms of Use and Incorporated Documents</h4>
                    <ul>
                        <li>We are continually changing and improving the PKLoop Site. We reserve the right in our sole discretion to modify it, to add or remove features or functionalities or to suspend or terminate any part or all of the PKLoop Site with or without notice to you. We may also modify or amend these Terms or incorporated documents to reflect changes in the law, changes to the PKLoop Site, Fees (defined below) or any other aspect of the relationship between PKLoop and You. You should look at the Terms regularly.</li>
                        <li>Amendments are effective no sooner than thirty (30) days after we post them on the PKLoop SIte for existing users and immediately for all the new users joining and accepting the terms after and on the day these are amendments are posted, unless we notify You otherwise. If You do not agree to the Terms, including as changed or modified, Your only recourse is to stop using or accessing the PKLoop Site.</li>
                    </ul>
                </div>

                <div className="py-1">
                    <h4>User or Third Party Generated Content</h4>
                    <p>We may, in our sole discretion, permit you to post, upload, publish, submit or transmit content created wholly by You or third parties and that is not created in whole or part by Us (“User Content”), which may include but is not limited to profile information. By making available User Content to Us, You grant PKLoop an irrevocable worldwide, perpetual, non-exclusive, transferable, royalty-free and fully paid up license, with the right to sublicense, use, copy, adapt, modify, distribute, license, sell, perform, transfer, display, publicly perform, stream broadcast, access, view and otherwise exploit (by means now known or to be developed in the future) the User Content on PKLoop and for any other purpose in our sole discretion, except that private messaging through the site will not be used by PKLoop in public advertising. The license granted by You to PKLoop will survive termination of these Terms and shall survive termination of PKLoop’s site, if any, or termination of Your Account. PKLoop does not claim any ownership interest or rights in Your User Content and nothing in these Terms shall be deemed to restrict rights You may have in Your User Content.</p>
                    <p>You acknowledge and agree that PKLoop has no role in the creation, either in whole or in part, of User Content you provide to PKLoop and that You alone are solely responsible for all User Content that You make available, including without limitation Requests, Offers and Acceptances, and the information that may be contained therein. You thus represent, warrant and agree that (i) you either own or have all necessary rights, licenses, consent and releases necessary to grant PKLoop the rights in User Content under these Terms; (ii) neither the User Content nor your posting, uploading, publication, submission or transmittal of User Content or PKLoop’s use of Your User Content (in whole or part infringes, misappropriates or violates any third party’s patent, copyright, trademark, trade secret, moral rights or other intellectual property or proprietary rights or result in violation of any applicable law, rules, regulation or court order. You acknowledge and agree that PKLoop may exercise any traditional editorial function as to User Content including but not limited to proofreading, editing, summarizing, digesting or other editing without becoming the author of such content, and that it remains Your sole responsibility to monitor your User Content and to guarantee that any such edited User Content is accurate and consistent with your representations, warranties and agreements in these Terms.</p>
                    <p>We reserve all rights, in our sole discretion to remove, suspend, disable access to or otherwise to restrict access to the PKLoop site or to User Content that We consider to be a violation of these Terms, PKLoop policies and procedures, We consider harmful to the site, to PKLoop or to any other Member or third party or which We consider to be otherwise objectionable or for any other reason.</p>
                </div>

                <div className="py-1">
                    <h3>Payment Terms and Appointment of PKLoop as Limited Payment Collection Agent</h3>
                    <h4>Payments-Related Representations and Warranties</h4>
                    <p>As set forth above, except where we otherwise specifically agree in writing, PKLoop does not own, create, offer, provide, control, manage, bring, or offer to bring or supply any packages or any other tangible or intangible thing that You may discuss with another Member. When Senders and Travelers make or accept an offer to transact, they are entering into a contract with each other, and even though PKLoop may act as a limited payment collection agent as defined below, it is not a party to any agreement discussed or entered into between Members.</p>
                    <p>PKLoop may restrict the availability of payment services, or any aspect or feature of payment services, to perform maintenance of systems to help ensure the proper functioning of the system or to improve, enhance, modify, suspend or terminate any payment service, or to introduce new or additional services at any time, including through additional third parties. The payment-related services may contain links to certain third-party websites, applications, services or resources (“Third Party Services”). Any such Third Party Services are subject to different terms or conditions and privacy practices created or controlled by third party providers and not PKLoop, and Members should review them carefully and independently. PKLoop is not responsible for or liable for the availability, accuracy, reliability or anything related to Third Party Services, including the content thereon. Links or other access to information of Third Party Service providers shall not constitute an endorsement by PKLoop of such providers or their services.</p>
                    <p>You may not use PKLoop’s payment related services except as authorized by the laws of the United States of America, the laws of the jurisdiction where you reside, and any other applicable laws. Specifically, but not by way of limitation, PKLoop’s payment related services may not be used to send or receive funds or currency into (i) any United States embargoed countries; (ii) to anyone on the United States Treasury Department’s list of Specially Designated Nationals or the United States Commerce Department’s list of Denied Persons List or Entry List. By agreeing to these Terms, by accessing and/or using the PKLoop site, you further represent and warrant that (i) neither you nor the subject of your transaction (e.g., items, goods, products, services, tangible or intangible things) are located in a country that is subject to a United States Government embargo, or that has been designated by the United States Government as a “terrorist supporting” country; and (ii) that you are not listed on any United States Government list of prohibited or restricted parties. Additionally, notwithstanding your agreement to the above relating to the laws of the United States of America and its subdivisions, localities and municipalities, you also hereby agree to comply fully with relevant export and import and customs laws in your local country and jurisdiction.</p>
                </div>

                <div className="py-1">
                    <h4>Payment Processing Services</h4>
                    <p>Payment processing services, which are a key feature of the PKLoop site, are currently provided by <Link to="https://stripe.com/">Stripe</Link>, and where applicable, may include money transmission services pursuant to licenses or other regulatory approvals held by <Link to="https://stripe.com/">Stripe</Link>. Payment processing services provided by <Link to="https://stripe.com/">Stripe</Link> are subject to the Stripe Connected Account Agreement, which includes the Stripe Services Agreement. By agreeing to these Terms or by accessing, searching or using the PKLoop Site, You agree to be bound by the Stripe Connected Account Agreement and the Stripe Services Agreement, as they may be amended or modified from time-to-time by <Link to="https://stripe.com/">Stripe</Link>. PKLoop’s provision of any payment processing services through <Link to="https://stripe.com/">Stripe</Link> is subject, and conditioned upon, Your agreement to provide PKLoop up-to-date, accurate, and complete information relating to you and your payment instrument(s) and You expressly authorize PKLoop to share this information and transaction-related information relating to your use of payment related services with <Link to="https://stripe.com/">Stripe</Link>. PKLoop reserves the right to provide payment processing services through other third party vendors, and if it choose to do so, will provide notice to you via PKLoop Messaging or through another method.</p>
                </div>

                <div className="py-1">
                    <h4>Payment Terms and Appointment of PKLoop as Limited Payment Collection Agent</h4>
                    <p>By agreeing to these Terms, and in accessing or using the PKLoop site, Travelers appoint PKLoop as their respective limited payment collection agent, authorized to receive and collect payments for transactions entered into between Members, including (i) PKLoop Service Fees, (ii) Traveler’s Fees, (iii) Acceleration Fees, if any, and (iv) Taxes and other Government Regulatory Fees (for example, without limitation duties, tariffs or government charges) (“Total Fees”) owed by Senders to Travelers as set forth in these Terms. Payments made by Senders to PKLoop in connection with an Offer shall be considered the same as a payment made directly to Travelers, and Travelers agree to transport and deliver the packages to Sender’s Recipient in the agreed-upon manner as if the Traveler has received payment directly from Sender. You further agree that PKLoop’s obligation to remit payments to Travelers is conditioned upon and extends only to sums that it has successfully received from Senders in accordance with the relevant agreements, and also that in accepting appointment as the limited payment collection agent, PKLoop assumes no liability for any acts or omissions of Senders or Travelers, Members or any other person. As limited payment collection agent, PKLoop assumes no liability or obligation for any funds or obligations owed by Senders that were not collected by PKLoop in its role under this Section.</p>
                    <p>Each Sender and Traveler acknowledges and agrees that, notwithstanding the fact that PKLoop is not a party to the agreement between Travelers and Senders, PKLoop acts as the Travelers’ payment collection agent for the limited purpose of accepting collection from Senders on behalf of the Traveler.</p>
                    <p><span>We deter traveler theft of goods by processing a $0.01 collateral HOLD on traveler's commission payout credit card or bank account.</span> If any Member does not make a payment properly, or if PKLoop cannot properly charge a payment method on file with it, or any other payment method for any reason, PKLoop expressly reserves all rights under applicable law to recover payment as well as all of its costs and expenses incurred, including reasonable attorneys' or other professionals' fees, in pursuing such payment(s).</p>
                </div>

                <div className="py-1">
                    <h4>Prohibited Items</h4>
                    <p>PKLoop cutomers (Senders and Travelers) expressly agree not to use the PKLoop site to request that a Traveler transport any package that is prohibited under the laws of the United States and/or its subdivisions, or of any international laws or laws of any local jurisdiction applicable to Members, goods, transit or destination. It is the responsibility of both the Sender and Traveler (and not PKLoop) to refrain from requesting or bringing any Item that is prohibited either by the jurisdiction of disembarkation, transit or embarkation. Prohibited items include, but are not limited, to:</p>
                    <ul>
                        <li>Hazardous Materials as defined by the United States Environmental Protection Agency (EPA) the United States Occupational Safety and Health Administration (OSHA), the United States Department of Transportation (USDOT), the United States Nuclear Regulatory Commission (NRC) or by the United States Department of Commerce (DOC), United States Customs and Borders Protection (CBP), United States Department of Homeland Security or similar agencies, national, state and local.</li>
                        <li>Counterfeit goods,  Stolen property.</li>
                        <li>Currency</li>
                        <li>Alcohol</li>
                        <li>Live animals, Certain agricultural products</li>
                        <li>Firearms, ammunition, explosives or chemicals</li>
                        <li>Human remains</li>
                        <li>Pornography or obscene materials</li>
                        <li>Illegal drugs or regulated drugs (prescription) in violation of law</li>
                        <li>Any product or item related to illegal activities, such as the production of illegal drugs</li>
                        <li>Any item that is prohibited by law in the place of origin, destination or any jurisdiction of transit through between origin and destination</li>
                        <li>Batteries</li>
                        <li>Aerosols or any flammable materials</li>
                        <li>Knives, batons or other weapons</li>
                        <li>Items imported into the United States without a customs declaration where one was required.</li>
                    </ul>
                    <p>PKLoop recommends that Senders and Travelers consult their respective government agencies which regulate items that may and may not be brought into or out of a country of origin, such as <Link to="/terms">lists maintained by the United States Transportation Security Agency, (TSA)</Link>. All travel from the United States, and packing related thereto, shall comply with all applicable <Link to="/terms">TSA Rules</Link>.</p>
                </div>

                <div className="py-1">
                    <h4>Undeliverable Packages</h4>
                    <p>An undeliverable package is one that cannot be delivered for reasons that include, but are not limited to, any of the following:</p>
                    <ul>
                        <li>The Sender or recipient refuses to pay for a package.</li>
                        <li>The Traveler, Sender or Recipient refuses to accept the shipment prior to, during or after delivery.</li>
                        <li>The recipient cannot be located.</li>
                        <li>The package contents or packaging are damaged to the point that rewrapping is not possible.</li>
                        <li>The package is unable to clear customs.</li>
                        <li>The package would likely cause damage or delay to other packages or property or injury to personnel.</li>
                        <li>The package contains prohibited items.</li>
                        <li>No appropriate person was available to accept the package at a delivery location on the initial delivery attempt or reattempts.</li>
                        <li>The package was improperly packaged.</li>
                        <li>The recipient of a Hold at Location cannot be located. </li>
                    </ul>
                    <p>Should a package be classified as undeliverable or unidentifiable, the following guidelines apply:</p>
                    <ol>
                        <li>If a package is undeliverable for any reason, we may attempt to notify the sender and traveler to arrange for the return of the shipment if local customs regulations will allow. If the sender cannot be contacted within five business days, we may have the traveler dispose of the package. PKLoop reserves the right, at its sole discretion, and without notice, to authorize Travelers to sell, destroy or otherwise dispose of undeliverable packages. By tendering a prohibited parcel, the Sender agrees to transfer and convey good and sufficient title of the contents of undeliverable shipments to PKLoop, and agrees to pay any costs incurred in returning, storing or in the sale, destruction or disposal thereof.</li>
                        <li>For packages not collected, return charges and fees will be assessed to the original Sender, along with the original charges and fees. Also included will be any other charges incurred by us, including, but not limited to, duties, taxes, clearance fees and storage fees*, if applicable. For returned packages containing dangerous goods, the Traveler must supply a completed return PKLoop List and all other required documents.</li>
                        <li>Packages that cannot be returned due to local regulatory constraints will be disposed of at Traveler’s discretion and at any location. The Sender agrees to pay any costs incurred by the Traveler in such placement or disposal.</li>
                        <li>If a Traveler does not make good faith effort to deliver the package properly, or if PKLoop verifies for any reason that the Traveler steals the package and does not follow through with delivery, PKLoop expressly reserves all rights under applicable law to recover payment as well as all of its costs and expenses incurred, including billing Traveler for package value, reasonable attorneys' or other professionals' fees (collections), in pursuing such payment (s). Collection activity will affect and damage your credit score.</li>
                    </ol>
                </div>

                <div className="py-1">
                    <h3>Fees</h3>
                    <p>Shipping Fee, PKLoop charges shipping fee based on chargeable weight:</p>
                    <p><span>Letters and documents within USA & Canada: $14.99</span></p>
                    <p><span>Packages within the USA ($14.99 + $1.5/pound) For example. Sending a 10 lb parcel will cost $14.99 + ($1.5/lb x10 lbs) = $29.99</span></p>
                    <p><span>Letters and documents internationally: $24.99 up to $49.99 (Travelers allowed to set pricing in this range)</span></p>
                    <p><span>International Packages ($5.99/pound) For example. Sending a 10 lb parcel will cost $5.99/lb x10 lbs = $59.99</span></p>
                    <p></p>
                    <p>Surcharge Fee, in order to provide a quality service, PKLoop may increase a “surcharge fee” per category of packages based on the demand (total available shipments) and supply (total available Travelers).</p>
                    <h4>Fees</h4>
                    <p>The following components that make up the Total Fees must be contained in, and fully described in the Traveler’s Offer. When Accepted, the Traveler’s Offer establishes the final and total amounts to which the Sender agrees.</p>
                    <ol>
                        <li>Service Fee: This is as service fee charged by and retained by PKLoop for the use of its Site by Senders and Travelers. Fees are collected by PKLoop from Senders and deducted from remaining amounts remitted to Travelers by PKLoop as the Traveler’s limited payment collection agent as described above. Service Fees are non-refundable and do not exceed 5% of the transaction. PKLoop shall receive a commission equivalent to 24% of the Traveler’s fee.” <span>E.g Traveler Fee $14.99, Sevice fee $0.75; Sender pays $15.75; PKLoop takes $3.75, Traveler earns $12.</span></li>
                        <li>Traveler’s Fee: The Traveler’s Fee is the amount Senders agree to pay Travelers for helping the Sender. As set forth above, PKLoop may estimate a Traveler’s Fee for planning purposes, but the actual Traveler’s Fee is set by the Traveler in the Offer. The Service Fee and Traveler’s Fee may collectively be referred to by PKLoop as the “Fees.” <span>E.g Traveler Fee $14.99, Sevice fee $0.75; Sender pays $15.75; PKLoop takes $3.75, Traveler earns $12.</span></li>
                        <li>Applicable Taxes: PKLoop may auto-calculate an estimate of sales and other taxes associated with the Fees. PKLoop always separately states the Applicable Taxes from Fees.</li>
                        <li>All government fees, tariffs and duties are the responsibility of the Traveler and Traveler is required to make sure that the Sender is aware of such fees prior to accepting the offer.</li>
                    </ol>
                </div>

                <div className="py-1">
                    <h4>Duty and Tax</h4>
                    <p>The Sender agrees to declare if the item they are shipping is for commercial purposes or if duty or tax is due on the item upon entry into a country. If the item requires a duty or tax, Sender is required to pay the entire fees associated with the items. If documentation is required to enter the country with the item, the Sender agrees to provide all documentation necessary. Be aware that Customs clearance can be time consuming.</p>
                    <p>PKLoop Traveler shall not be responsible for any customs clearance activity unless expressly told prior to accepting Package. Traveler/Sender will ensure that all packages comply with known foreign entry and duty laws.</p>
                </div>

                <div className="py-1">
                    <h4>Payment</h4>
                    <p>As a Traveler, you will receive applicable Delivery Fee per package as listed on PKLoop site. PKLoop will process all payments due to you through Stripe, its third-party payments processor.  PKLoop reserves the right to withhold all or a portion of Delivery Fees if it believes that you have attempted to defraud or abuse PKLoop or its payment systems.</p>
                </div>

                <div className="py-1">
                    <h4>Insurance</h4>
                    <p>Optional Parcel Insurance available at this time through InsureSHip. Claims can be filed here: <Link to="https://claims.insureship.com/lookup">https://claims.insureship.com/lookup</Link> Phone: 866-701-3654 Email: <a href="mailto:claims@insureship.com">claims@insureship.com</a> Please see the attached InSureShip Coverage and Terms of Service. PKLoop cannot be held responsible if an airline loses an Item, or if Customs takes possession or destroys the parcel. PKloop will not be responsible if there is consequential damage that results from the delay, damage or loss of a parcel.</p>
                </div>

                <div className="py-1">
                    <h4>Import Restrictions and Charges</h4>
                    <p>It is the sole responsibility of the Travelers to be familiar with, to specify, and to include in the Traveler’s Offer, any and all applicable customs duties, tariffs, and charges applicable to packages. Although not exhaustive, PKLoop may provide links to certain government and third party sites where Members can find out more information about their travel destinations and rules and regulations applicable to their travel, including:</p>
                    <Link to="/terms">Country Information from U.S. State Dept.--Bureau of Consular Affairs</Link>
                    <Link to="/terms">Customs Duty Information from U.S. Customs and Border Protection</Link>
                    <Link to="/terms">Country Information from Int’l Air Transport Ass’n</Link>
                    <Link to="/terms">U.S. Customs and Border Protection Form 6059B</Link>
                </div>

                <div className="py-1">
                    <h4>Ownership, Acceptance, Risk of Loss and Insurance</h4>
                    <p>Members acknowledge and agree that except where prohibited by applicable law or otherwise agreed to by Members, it is the Travelers, and not Senders, considered as the guardian, who have <span>temporary ownership</span> of packages during transportation and must maintain for presentment all original receipts evidencing such ownership (PKLoop List). Members also acknowledge and agree that to the maximum extent allowed by law, the risk of loss remains with the Traveler and Sender unless and until the Traveler has completed all of the obligations under his or her agreement with the Sender, which includes delivering parcels to recipients as agreed. <span>As a traveler, the item will be considered yours until hand delivered to the requester. You simply carry the item as you would do for a family member or a friend.</span></p>
                    <p>PKLoop recommends that Senders and Travelers procure their own insurance to cover the cost and expenses relating to a parcel. PKLoop may, but is not obligated to recommend or to offer links where Senders and Travelers may procure insurance relating to their trips.</p>
                </div>

                <div className="py-1">
                    <h4>Acceptance of Packages</h4>
                    <p>The Sender and Travelers must agree at the time the Sender’s Request is accepted by the Traveler on a specific time period for acceptance of package. Travelers shall bear the responsibility to identify an acceptable safe and public place to meet with Senders for the purpose of inspection and exchange of goods. The time for delivery can be extended only by written agreement between the Sender and Traveler on the PKLoop site. Unless the parties otherwise agree in writing, it is the Traveler’s obligation to inspect and accept the packages at the time of delivery, and the agreement between the parties is deemed complete at the time of acceptance regardless of whether the Traveler/Recipient shows up to inspect and accept packages before travel. Unless the Traveler and Sender have agreed otherwise in writing, if the packages are not made available for delivery up to 2 hours before Traveler departure date, and/or the recipient does not show up to receive package, Sender’s payment Method will be charged and the amounts released to the Traveler. The only permissible method to extend the delivery, inspection and acceptance periods agreed to by the Sender and Traveler is written communication between the parties on the PKLoop Site or through notification by PKLoop through the PKLoop site.</p>
                </div>

                <div className="py-1">
                    <h4>Liability</h4>
                    <p>Please note that, as stated above, the site, application and services are intended to be used to facilitate travelers providing shipping services to senders. PKLoop recommends that travelers screen and inspect all the contents contained in packages and the condition, legality or suitability of all packages. PKLoop recommends that senders/travelers create a list including photos, descriptions and values of all shipments. Travelers are encouraged to inspect all parcels prior to travel. PKLoop is not liable for the contents of items contained on the list.</p>
                </div>

                <div className="py-1">
                    <h4>Rejection and Refunds</h4>
                    <p>Travelers may refuse to accept the package only if the Traveler has brought prohibited items or the package is otherwise not in the condition represented. Travelers may not refuse acceptance of packages (i) anytime less than six hours left for departure, (ii) once Senders make payment and comply with their agreement. Senders/Travelers agree that PKLoop, in its sole discretion, may determine whether the reason for rejection is acceptable under applicable policies and if PKLoop determines the rejection is impermissible or unauthorized, Senders/Travelers agree that their Payment Method may be charged and the transaction completed as agreed to by the parties. Except as set forth above, in instances where the Traveler/Recipient fails to appear for inspection and acceptance within 24 hours of the delivery date, Travelers are required to confirm inspection and acceptance of packages in the PKLoop messaging on the Site in order for PKLoop to release funds to Travelers.</p>
                </div>

                <div className="py-1">
                    <h4>Intellectual Property</h4>
                    <p>All information and material on our site, other than User Content, is either owned by PKLoop or is licensed by the respective owners. You are not allowed to use these materials except as we permit You to do so in writing. The trademarks and service marks PKLoop and the associated logo and graphics are owned by PKLoop protected by copyright, trademark and other laws of the United States, foreign countries and international conventions. Any other marks are the property of their respective owners. You agree that You recognize our rights and the rights of third parties in their respective marks and that You may not copy, use or otherwise exploit them except as permitted in writing. We retain ownership of all of our intellectual property rights and You have no rights to our intellectual property or rights in intellectual property.</p>
                    <p>Subject to Your continued compliance with these Terms, and in Our sole discretion, PKLoop grants You a limited, non-exclusive, revocable, royalty-fee, fully paid up, nontransferable, and non-sublicensable license to reproduce and display content from the PKLoop Site(excluding any software source code) only in connection with Your access to and participation in PKLoop for Your personal and non-commercial use. You will not use, copy, adapt, modify, prepare derivative works based upon, distribute, sell, perform or display content, except as expressly permitted in the Terms. No other licenses or rights are granted to You by implication or otherwise under any intellectual property rights owned or controlled by PKLoop or its licensors.</p>
                </div>

                <div className="py-1">
                    <h4>Warranty Disclaimers</h4>
                    <p>We hope You enjoy using the PKLoop site. There are certain things that we do not and cannot promise.</p>
                    <p>Your use of the PKLoop site shall be at your sole risk. You acknowledge and agree that PKLoop does not have an obligation, but reserves the right for any reason to (a) monitor or review or edit user content; or (b) for any permissible purpose, conduct identity verification, background (including criminal background) or registered sex offender checks on any member or other person bound by these terms</p>
                    <p>The PKLoop site is provided on an “as is” and “as available” basis. To the maximum extent allowed by law, PKLoop and its subsidiaries, affiliates, officers, directors, investors, partners, employees, agents, and licensors expressly disclaim all warranties of any kind, whether express or implied, including, but not limited to the implied warranties of title, merchantability, fitness for a particular purpose and non-infringement.</p>
                    <p>PKloop and its subsidiaries, affiliates, officers, directors, investors, partners, employees, agents, and licensors make no warranty that (i) the PKLoop site will meet your requirements; (ii) the PKLoop site will be uninterrupted, timely, secure or error-free; (iii) the results that may be obtained from the use of the PKLoop site will be accurate or reliable; (iv) the quality of any products, services, information or other material purchased or obtained by you facilitated through the PKLoop site will meet your expectations; and (v) any errors in the software, applications or code will be corrected.</p>
                    <p>Any material downloaded or otherwise obtained through the use of the PKLoop site is accessed at your own discretion and risk, and you will be solely responsible for and hereby waive any and all claims and causes of action with respect to any damage to your computer system, internet access, download or display device, or loss of data that results from the download of any such material.</p>
                    <p>You are solely responsible for all of your communications and interactions with other members or users of the PKLoop site and with third parties with whom you interact with or communicate with as a result of your use or access of the PKLoop site. You understand that PKLoop does not undertake to verify the accuracy of or statements of members or third party users of the PKLoop site or to verify any items that may be the subject of a relationship facilitated by the PKLoop site.</p>
                    <p>You further acknowledge and agree that you are not acting upon the advice or direction of PKLoop site or any of its subsidiaries, affiliates, officers, directors, investors, partners, employees, agents, and licensors, none of whom advise or direct you or your communications or your transactions with members or third parties, including but not limited to legality of your transactions. Items, communications, taxes, duties, fees or other charges, or government or customs officials of any country relevant to any transaction attempted, contemplated or completed by you or between members facilitated by the pkloop site. You alone are responsible for any statement made to any government official regarding any transaction attempted, contemplated or completed by you or between members that is facilitated by the pkloop site, including but not limited to, that your transaction is in full compliance with local laws that may apply to such transaction and remain at all times solely responsible for any taxes, fees, duties, import or export charges, fines, penalties, interest of payments of any kind relating to your transactions.</p>
                    <p>No advice or information, whether oral or written, obtained by you from PKLoop or through or from the PKLoop site, software or code shall create any warranty not expressly stated in the terms of service.</p>
                </div>

                <div className="py-1">
                    <h4>Limitation of Liability</h4>
                    <p>Where permitted, and to the maximum extent allowed by law, you acknowledge and agree that the entire risk arising out of your access to and use of the PKLoop site, or to the relationship between you and PKLoop or between you and other members, remains with you and neither PKLoop nor its subsidiaries, affiliates, officers, directors, investors, employees, partners, agents, and licensors will be responsible for lost profits, revenues or data or financial losses or indirect, special, consequential, exemplary or punitive damages even if we have been advised of their possibility or even if a limited remedy set forth herein is found to have failed of its essential purpose and regardless of the nature of the cause of action, claim for relief or alleged theory of recovery whether in contract, tort (including negligence), strict liability or otherwise.</p>
                    <p>To the maximum extent of the law, the total liability of PKLoop, its subsidiaries, affiliates, officers, directors, investors, employees, partners and authorized agents for claims arising out of or relating to these terms or the relationship between us, including any implied warranties, is limited to the amount you paid us for the access or user of the PKLoop site in the three months prior to the events giving rise to your claim or if no sum was charged, then the sum of one hundred dollars ($100).</p>
                </div>

                <div className="py-1">
                    <h4>Exclusions</h4>
                    <p>Some jurisdictions do not allow the exclusion of certain warranties or the limitation or exclusion of liability for incidental or consequential damages. Accordingly, some of the above limitations contained in the warranties or limitations of liability paragraphs immediately above may not apply to you.</p>
                </div>

                <div className="py-1">
                    <h4>Indemnification</h4>
                    <p>You agree to release, defend, indemnify, and hold PKLoop and its affiliates and subsidiaries, and their respective officers, directors, investors, employees and agents, harmless from and against any claims, liabilities, damages, losses, injuries, and expenses, including without limitation reasonable legal and professional fees, arising out of or in any way connected with.about-banner.
                        <ol>
                            (a).Your access to or use of The PKLoop Site or Your violation of these Terms; 
                            <li>Your User Content; Your interaction with any other Member, Sender, Traveler or Third Party or other user of the PKLoop Site or </li> 
                            
                            <li> any Request, Offer, Acceptance or any other transaction (including but not limited to any injuries, losses, damages (direct, indirect, consequential or otherwise) of any kind between You and Members).</li>
                        </ol>
                    </p>
                    <p className="two-star">If you are a California resident, you waive California Civil Code Section 1542 which provides:</p>
                    <p className="two-star">A general release does not extend to claims which the creditor does not know or suspect to exist in his or her favor at the time of executing the release, which if known by him or her must have materially affected his or her settlement with the debtor.</p>
                    <p className="two-star">If you are not a California resident, you waive your rights under any statute, at common law, at civil law or in equity similar in principle to California Civil Code Section 1542 that relates to or governs your right to waive unknown claims in your jurisdiction.</p>
                </div>

                <div className="py-1">
                    <h4>Arbitration and Class Action Waiver</h4>
                    <h5 className="mb-1">Please Read this Section Carefully. It Affects Your Legal Rights, Including Your Right to File a Lawsuit In Court.</h5>
                    <p>You and PKLoop agree that these Terms affect interstate commerce and that the Federal Arbitration Act, governs the interpretation and enforcement of these arbitration provisions.</p>
                    <p>The term “Dispute” means any dispute, claim or controversy between us that arises out of this agreement, or the use of the PKLoop Site, or the relationship between us, regardless of legal theory and includes claims that accrued before the date You entered into this agreement as well as claims relating to the interpretation, validity, enforcement or scope of the agreement to arbitrate disputes contained in this Section. The term “Dispute” is to be interpreted in the broadest sense allowed by law. The only disputes excluded from this broad provision are claims that can be resolved in Small Claims Court and certain intellectual property claims, as provided below.</p>
                    <p>By agreeing to these Terms, You agree to resolve any and all disputes with PKLoop as follows:</p>
                    <p><span>Initial Dispute Resolution:</span> Most disputes can be resolved without resort to arbitration or litigation. You can reach PKLoop support department by sending a request. Except for intellectual property and small claims court claims, the parties agree to use their best efforts to resolve all disputes in good faith negotiations between them, which both agree is a precondition to either initiating an arbitration or lawsuit.</p>
                    <p><span>Binding Arbitration:</span> If we cannot resolve the dispute with You within thirty (30) days of when You start informal dispute resolution, then the dispute must be resolved by binding arbitration which may be begun by either You or PKLoop. All claims or disputes arising out of or relating to these Provider Terms (including the Terms' or Privacy Policy’s formation, performance, and breach), Your relationship with PKLoop and/or Your use of the PKLoop Site shall be finally settled by binding arbitration administered by JAMS in accordance with the JAMS <Link to="/terms">Streamlined Arbitration Procedure Rules</Link>, excluding any rules or procedures governing or permitting class or representative actions. (If Your claim exceeds $250,000, You and PKLoop agree that the JAMS' <Link to="/terms">Comprehensive Arbitration Rules and Procedures</Link> will apply, excluding rules or procedures governing or permitted class or representative actions). The arbitrator, and not any federal, state, or local court or agency, shall have exclusive authority to resolve all such disputes and has the power to grant whatever relief would be available in a court under law or in equity. The arbitrator’s award shall be written and shall be binding on the parties and may be entered as a judgment in any court of competent jurisdiction.</p>
                    <p><span>Starting Arbitration:</span> To start an arbitration, You must do the following: (a) write a Demand for Arbitration that includes a description of the claim and the amount of damages You seek to recover (You may find a copy of a Demand for Arbitration at www.jamsadr.com); (b) send three copies of the Demand for Arbitration, plus the appropriate filing fee, to JAMS, Two Embarcadero Center, Suite 1500, San Francisco, California 94111; and © send one copy of the Demand for Arbitration to Grabr at 1355 Market Street, Suite 600, San Francisco, California 94103, ATTN: Legal.</p>
                    <p>You and PKLoop each understands that, absent the mandatory arbitration provision in this Section, they would have the right to sue in court and have a jury trial. You also acknowledge that You are giving up the right to a jury trial and understand that the costs of arbitration and right to pre-trial discovery is more limited than many courts permit.</p>
                    <p><span>Location of Arbitration:</span> We both agree that arbitration between PKLoop and Providers shall take place in the City and County of Dallas.</p>
                    <p><span>Class Action Waiver:</span> Providers and PKLoop each agrees that any and all arbitration shall be conducted in their individual capacities only and not as a class action or other representative action, and the parties expressly waive their right to file a class action or seek relief on a class basis or any other representative basis. YOU AND PKLOOP AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING.</p>
                    <p>If any court or arbitrator determines that the class action waiver above is void or unenforceable for any reason or that an arbitration can proceed on a class basis, then the arbitration provisions set forth above shall be deemed null and void in their entirety and the parties shall be deemed to have not agreed to arbitrate disputes.</p>
                    <p><span>Exception:</span> Litigation of Intellectual Property and Small Claims Court Claims: Notwithstanding Your and PKLoop’s decision to resolve all disputes through mandatory arbitration, either party may bring enforcement actions, validity determinations or claims arising from or relating to theft, piracy or unauthorized use of intellectual property in state or federal court or in the United States Patent and Trademark Office to protect its intellectual property rights (“intellectual property rights” means patents, copyrights, moral rights, trademarks, and trade secrets, but not privacy or publicity rights). Either party may also seek relief in a small claims court for disputes or claims within the scope of that court’s jurisdiction.</p>
                    <p><span>Survival:</span> This Arbitration and Class Action Waiver section will not be affected by any termination of Your Account or the PKLoop Site and will survive termination of the relationship between You and PKLoop.</p>
                </div>

                <div className="py-1">
                    <h4>Copyright</h4>
                    <p>We respect and expect Providers and Parents to respect copyright law. Where warranted, we will terminate the Account of any user who repeatedly infringes or is believed to be repeatedly infringing the rights of copyright holders. </p>
                </div>

                <div className="py-1">
                    <h4>Third Party Sites</h4>
                    <p>The PKLoop Site may contain links or connections to third party websites or services that we do not control. You accept the risk of accessing such sites and agree that we are not responsible for any associated risks. We are not responsible for and assume no risk associated with any third party sites or content.</p>
                </div>

                <div className="py-1">
                    <h4>Trust and Safety</h4>
                    <p>As part of our community of global senders and travelers, we have these few must-know tips to help you make the most of your experience. Scroll below for standards and expectations we’ve put in place to keep you safe.</p>
                </div>

                <div className="py-1">
                    <h4>Be Watchful</h4>
                    <p>Only deliver what You can see. Please, thoroughly check the content to be delivered, especially when it's a personal package. Never accept a closed package. Also, you have the right to refuse delivery at any time. Close up the package yourself after having confirmed that the contents are legitimate. In the event of doubt of suspect behavior on the part of the Sender, take pictures, immediately refuse the delivery and let us know by e-mail at <a href='mailto:contact@mypkloop.com'>contact@mypkloop.com</a></p>
                </div>

                <div className="py-1">
                    <h4>Verified Profile</h4>
                    <p>Users must complete a 2-step verification process to ensure that all parties are real people. You will be asked to verify your account via email and SMS. This helps protect our Members from fake accounts and spam. Your email address and phone number will be kept private.</p>
                </div>

                <div className="py-1">
                    <h4>Sender — Traveler Communication</h4>
                    <p>We recommend senders, recipients and travelers meet in a public place, such as an airport or hotel lobby. Use the app messenger to coordinate a mutually convenient time and place to meet.</p>
                </div>

                <div className="py-1">
                    <h4>User Ratings</h4>
                    <p>By rating your experience, it allows your voice to be heard, supports transparency and helps new users confidently send parcels and travel with PKLoop for the first time. Both senders and travelers should leave a review after a completed delivery. If you encounter an issue with a user, please contact our team <a href='mailto:contact@mypkloop.com'>contact@mypkloop.com</a></p>
                </div>

                <div className="py-1">
                    <h4>No Tolerance Policy</h4>
                    <p>PKLoop has a no tolerance policy for harassment or illegal activity of any kind. We may take action if a user does something to diminish trust within the community, such as canceling multiple orders or deliveries, transacting outside of PKLoop or spamming accounts.</p>
                </div>

                <div className="py-1">
                    <h4>Secure Payments</h4>
                    <p>Your money is safe with PKLoop every step of the way. PKLoop uses a secure payment system and you have a money back guarantee for uncompleted transactions such as traveler not picking up your parcel for approved valid reasons. We are not responsible if your recipient does not show up to collect parcel.</p>
                </div>

                <div className="py-1">
                    <h4>Payment Methods</h4>
                    <p>PKloop accepts a range of payment methods including ACH, payment with checking/savings accounts, Visa, MasterCard and American Express, with more options available soon. For more information on accepted payment methods, please visit <span>Stripe Connect Payments page</span>.</p>
                </div>

                <div className="py-1">
                    <h4>Escrow Account</h4>
                    <p>When you accept a travel match offer from a traveler, we will charge your payment card for the total order amount. This money is kept safe in our escrow account and is transferred to your traveler only when your recipient collects item (confirmed through traveler-recipient code match you send to your recipient). We deter traveler theft of goods by processing a $0.01 collateral HOLD on a traveler's commission payout credit card or bank account.</p>
                </div>

                <div className="py-1">
                    <h4>Refund</h4>
                    <p>You may cancel your request at any point before a traveler accepts to transport your parcel. Once you accept a traveler to transport your parcel, you are committed to paying the total order amount and your payment will be collected/held. If your traveler declines your parcel for suspicious reasons (picture proof required/submitted), you are eligible for a refund minus platform fees; If your traveler’s flight gets delayed over 24 hours, you are eligible for a full refund if your package is not shipped.</p>
                </div>

                <div className="py-1">
                    <h4>Priority Response</h4>
                    <p>Our dedicated team are on hand to resolve any issue that arises throughout the order and delivery process. Expect an answer within 24 hours. For trust and safety concerns, we will expedite your ticket for a fast resolution <a href ='mailto:contact@mypkloop.com'>contact@mypkloop.com</a></p>
                </div>

                <div className="py-1">
                    <h4>Code of Conduct</h4>
                    <p>As a PKLoop community member, you are responsible for following guidelines to create a safe and welcoming experience for your fellow senders and travelers:</p>
                </div>

                <div className="py-1">
                    <h4>Respect</h4>
                    <p>PKLoop relies on the foundation of mutual respect. When communicating with your sender or traveler, treat them as you would like to be treated. Reports of abusive behavior may result in your account being blocked.</p>
                </div>

                <div className="py-1">
                    <h4>Be Responsive</h4>
                    <p>Senders and travelers are expected to reply to messages within 24 hours of receipt. Travelers should update senders with a delivery update within 24 hours of their arrival. Responding to messages promptly encourages a positive rating, which is displayed publicly on your profile.</p>
                </div>

                <div className="py-1">
                    <h4>Safety</h4>
                    <p>Do your part to maintain a safe community by keeping all payments and communication on the PKLoop Site. We provide 2-step verification, secure payments and 24-hour customer support to protect you from fraudulent activity. Make sure that you understand and pay all applicable customs fees.</p>
                </div>

                <div className="py-1">
                    <h4>Be Secure</h4>
                    <p>Complete your user profile to get the most out of your experience. Senders will prefer to select from travelers with a profile photo and vice versa. Your personal information, such as your email address, phone number, home address and payment details are kept private at all times.</p>
                </div>
            </div>
        </HeaderFooter>
    )
}

export default ToS
