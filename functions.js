
function eta(istraffic, distance) {
    let dpt = distance * 2;
    let basetime = 15;
    let td = istraffic ? 15 : 0;
    let total = dpt + basetime + td;

    console.log(`Your order will be delivered in ${total} minutes`);
}

eta(true, 2);