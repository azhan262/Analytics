import React, { useState, useEffect, useRef } from 'react'
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { useRouteMatch, useHistory, useLocation } from "react-router-dom";

function InventoryItemListReports() {
    const handleUpdate = () => {

    }
    const handleTableValues = () => {
        
    }
    const onSubmit = async (data) => {
       
        //history.push("/placement-question-details")
      }
    const formik = useFormik({
        initialValues: {
            to: '',
            from: '',
            startDate: '',
            dueDate: '',
            invoice: '',
            reference: '',
            item: '',
            description:'',
            qty: '',
            unitPrice: '',
            disc: '',
            account:'',
            taxRate: '',
            amountPkr: '',
            name: '',
            total:'',
            accountPaid: '',
            amountCredit: '',
            amountDuePaid:'',
            amountTotalDebit:'',
            transactionType: '',
            amountPaidAmountValue: '',
            amountPaid:'',
            datePaid:'',
            paidTo: '',
            referencePaid: '',
            datePurchaseOrSalesTaxVat:'',
            accountNamePurchaseOrSalesTaxVat:'',
            valuePurchaseTaxVatDebit:'',
            valueSalesTaxVatCredit:'',
        },

        //4 Make onSubmit propert from handle what happens from data on form submisison

        onSubmit: values => {

          
          //createTodo(formik.values)
          //redirecting 
          //history.push("/")

          onSubmit(formik.values)

        },
        

        //5 Make validation property
        
        validate: values => {
            
   
            let errors = {}
  
            const letters = /^[A-Za-z ]+$/;

            const cnic = /^[0-9--]+$/;

            const phone = /^[0-9]+$/;

            const symbols = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;
            
            if(!values.name){
                errors.headOffice = "Please fill in School Head Office Name"
            }else if (!letters.test(values.headOfficeName)) {
                errors.headOffice = "Please enter a valid School Head Office Name"
            }
            if(!values.startDate){
              errors.startDate = "Please fill in Starting Date"
            }
            if(!values.dueDate){
              errors.dueDate = "Please fill in Due Date"
            }
            if(!values.productionDeadline){
                errors.productionDeadline = "Please fill in Production Deadline"
            }
            if(!values.deliveryDate){
                errors.size = "Please fill in Delivery Date"
            return errors
            }


        }


    })
    return (
        <div>
        <div>
        <div className="container-fluid">
   <Row>
     <Col md="12">
       <Card className="card-plain">
         <CardHeader><h3>Inventory Item List</h3></CardHeader>
         <CardBody>
         <form onSubmit={formik.handleSubmit}>
               <div className="mt-3">
               <h1 className="title-dark-big title-head"></h1>
       <p></p>
       <div className="row">
         <div className="col-lg-1 col-md-1 col-sm-6 col-xs-6" />
         <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
           <div className="login-registration-field">
           
             <hr/>
               <div className="modal-body">
                 <div className="row">
                 <div className="col-md-2">
                          <div className="form-group">
                          <label htmlFor>Date: </label>
                          <div style = {{display:'inline-flex'}}>
                          <select className="form-control"  name="startDate" onChange={formik.handleChange}  onBlur={formik.handleBlur} value={formik.values.startDate}>
                             <option>Test</option>
                            </select>
                          
                            <select className="form-control"  name="startDate" onChange={formik.handleChange}  onBlur={formik.handleBlur} value={formik.values.startDate}>
                             <option>Today</option>
                             <option>End of last month</option>
                             <option>End of last quarter</option>
                             <option>End of last financial year</option>
                            </select>
                           </div>
                          </div>
                        </div>

                   <div className="col-md-2">
                     <div className="form-group">
                     <label htmlFor>Columns</label>
                     <select className="form-control"  name="startDate" onChange={formik.handleChange}  onBlur={formik.handleBlur} value={formik.values.startDate}>
                        <option>Average Cost</option>
                        <option>COGS Account</option>
                        <option>COGS Tax Rate</option>
                        <option>Inventory Type</option>
                        <option>Item Code</option>
                        <option>Item Name</option>
                        <option>Purchases Account</option>
                        <option>Purchases Description</option>
                        <option>Purchase Tax Rate</option>
                        <option>Quantity On Hand</option>
                        <option>Sales Account</option>
                        <option>Sales Description</option>
                        <option>Sales Tax Rate</option>
                        <option>Status</option>
                        <option>Total Value</option>
                        <option>Unit Cost Price</option>
                        <option>Unit Sales Price</option>
                       </select>
                     {formik.touched.endDate ? (<div className='error'>{formik.errors.endDate}</div>) : null}
                     </div>
                   </div>
                   <div className="col-md-2">
                     <div className="form-group">
                     <label htmlFor>Grouping/Summarising</label>
                     <select className="form-control"  name="startDate" onChange={formik.handleChange}  onBlur={formik.handleBlur} value={formik.values.startDate}>
                        <option>None</option>
                        <option>COGS Account</option>
                        <option>COGS Tax Rate</option>
                        <option>Inventory Account</option>
                        <option>Inventory Type</option>
                        <option>Purchase Account</option>
                        <option>Purchase Tax Rate</option>
                        <option>Sales Account</option>
                        <option>Sales Tax Rate</option>
                        <option>Status</option>
                       </select>
                     {formik.touched.endDate ? (<div className='error'>{formik.errors.endDate}</div>) : null}
                     </div>
                   </div>
                 
                   <div className="col-md-2 pt-4">
                     <div className="form-group">
                       <button className = "btn" onClick = {(e) => handleUpdate(e)}>Update</button>
                     </div>
                   </div>
                </div>  
                 <hr />
               </div>
           </div>
         </div>
       </div>
               </div>
               </form>
               </CardBody>
               </Card>
               </Col>
               </Row>
               <div className = "text-center">
               <h4><b> Inventory Item List  </b></h4>
               <h4>Name</h4>
               <h4>Date</h4>
               </div>
               <div>
                   {handleTableValues()}
               </div>
               </div>
   </div>
   </div>
    )
}

export default InventoryItemListReports
