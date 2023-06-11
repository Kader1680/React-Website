import React, {useState, createContext} from "react"; 
import {DATAHOME} from "../Data/dataHome"


// create context like store 
// null => mean by default that is empty
export const CoursesContext = createContext(null)

// get courses favorite items

function GetCoursesDefault() {
    // create courses by default is empty 

    const courses = {};
    // get all production and loop of them than stoked in cart 

    // i = 1 because id srat with 1 
    for (let i = 1; i < DATAHOME.length + 1; i++) {
        // initialize every item with value 0 before add (increase)
        courses[i] = 0
    }
    return courses
}


const CoursesContextProvider = (props) => {
    // caet items ==> all your products
    const [CourseItems, setCourseItems] = useState(GetCoursesDefault()) 
    // cartItems in usestate by default it's 0 that the function GetCartDefault retur<nav class="navbar navbar-expand-lg navbar-light bg-light">
    // in button you see (0)
    // make some OPERATION TO CART LIKE ADD/REMOVE AND VALUE THAT WILL CHANGE FROM (0)
    // ----------------------
    // create fucntion that modify 0 value to 1/2/3

    const AddCart = (id_of_item) => {
      setCourseItems(
        // pervious_value_of_state == (0)
        // the function setcartItems ==> will change this value by increase '+' or decrease '-'
        // this fucntion that will return object of privousvlaue ...previous value (0) in all product
        (pervious_value_of_state)=>({...pervious_value_of_state, [id_of_item]: pervious_value_of_state[id_of_item] + 1})
        //                                      0                   1            the prodcut 1 will change (1)(2)(3)(4)
        //                                      0                   2            the prodcut 2 will change (1)(2)(3)(4)
        //                                      0                   3            the prodcut 3 will change (1)(2)(3)(4)
        //                                      0                   4            the prodcut 4 will change (1)(2)(3)(4)
        //                                      0                   5            the prodcut 5 will change (1)(2)(3)(4)
        //                                      0                   6            the prodcut 6 will change (1)(2)(3)(4)
      )
    }

      const RemoveCart = (id_of_item) => {
        setCourseItems(
          // pervious_value_of_state == (0)
          // the function setcartItems ==> will change this value by increase '+' or decrease '-'
          // this fucntion that will return object of privousvlaue ...previous value (0) in all product
          (pervious_value_of_state)=>({...pervious_value_of_state, [id_of_item]: pervious_value_of_state[id_of_item] - 1})
          //                                      0                   
        )
    }
    // create context value and put 3 value as object ==> caretitems by (0) default + addcart + remove

    const contextvalue = {CourseItems, AddCart, RemoveCart}

    console.log(CourseItems)
    return(
      
      <div>
        
      
        <CoursesContext.Provider value={contextvalue}>{props.children}</CoursesContext.Provider>
      </div>
)
}

export default CoursesContextProvider