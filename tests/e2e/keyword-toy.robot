*** Settings ***
Library    SeleniumLibrary
 
*** Variables ***
${URL}    http://toy-r-not-us.co.th
 
*** Keywords ***
เปิดเว็บtoy-r-not-usขึ้นมา
    Open Browser    ${URL}    chrome

ค้นหาสินค้าผ่านToy R not Us
    [Arguments]    ${AGE}    ${GENDER}    ${TOYID}    ${TOYNAME}    ${QTY}    ${TOYNAME}    ${SHIPPING}    ${QTY}    ${FULLNAME}    ${ADDRESS1}    ${ADDRESS2}    ${CITY}    ${PROVINCE}    ${POSTCODE}    ${PAYMENT}
    ค้นหาสินค้า    ${AGE}    ${GENDER}
    กดเลือกสินค้าที่ต้องการซื้อ    ${TOYID}  
    เช็ครายละเอียดสินค้าก่อนกดเพิ่มเข้าตะกร้า    ${TOYNAME}    ${QTY}
    เช็กสินค้าและราคาในตะกร้าเลือกshipping    ${TOYNAME}    ${SHIPPING}    ${QTY}
    ใส่ shipping address    ${FULLNAME}    ${ADDRESS1}    ${ADDRESS2}    ${CITY}    ${PROVINCE}    ${POSTCODE}
    เลือกpayment methods    ${PAYMENT}
    สั่งซื้อสินค้าสำเร็จ

ค้นหาสินค้า
    [Arguments]    ${AGE}    ${GENDER}
    Select From List By Value    select_age    ${AGE}
    Select From List By Value    select_gender    ${GENDER}
    Click Button    btn_search
กดเลือกสินค้าที่ต้องการซื้อ
    [Arguments]    ${TOYID}
    Element should contain    toy_list
    Click Link			      toy_id    ${TOYID}
เช็ครายละเอียดสินค้าก่อนกดเพิ่มเข้าตะกร้า
    [Arguments]    ${TOYNAME}    ${QTY}
    Wait Until Page Contains    ${TOYNAME} 
    Element should contain      toy_id    
    Element should contain      price
    Element should contain      availability
    Element should contain      brand
    Element should contain      gender
    Element should contain      age
    Element should contain      product_shipping_method
    Select From By Value        quantity    ${QTY}
    Click Button                btn_add_to_cart
เช็กสินค้าและราคาในตะกร้าเลือกshipping
    [Arguments]    ${TOYNAME}    ${SHIPPING}    ${QTY}
    Wait Until Page Contains     ${TOYNAME}
    Select From List By Value    quantity           ${QTY}   
    Select Radio Button          shipping_method    ${SHIPPING}
    Element should contain       shipping_fee
    Element should contain       subtotal_price
    Element should contain       total_price
    Click Button                 btn_checkout
ใส่ shipping address
    [Arguments]    ${FULLNAME}    ${ADDRESS1}    ${ADDRESS2}    ${CITY}        ${PROVINCE}    ${POSTCODE}
    Input Text    fullname    ${FULLNAME}
    Input Text    address1    ${ADDRESS1}
    Input Text    address2    ${ADDRESS2}
    Input Text    city        ${CITY}
    Input Text    province    ${PROVINCE}
    Input Text    postcode    ${POSTCODE}
    Click Button    btn_submit_address
เลือกpayment methods
    [Arguments]    ${PAYMENT}
    Select Radio Button       payment_method    ${PAYMENT}
    Element should contain    order_summary
    Click Button              btn_placeorder
สั่งซื้อสินค้าสำเร็จ
    Page Should Contain       Thanks you
    Element should contain    order_number
    Element should contain    order_summary

ปิดbrowser
    Close Browser
