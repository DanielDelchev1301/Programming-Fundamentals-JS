function vacation(people,type,day) {
    let total = 0;
    if (day === 'Friday') {
        switch(type) {
            case 'Students': total = people * 8.45; break;
            case 'Business': total = people * 10.90; break;
            case 'Regular': total = people * 15; break;
        }
    } else if (day === 'Saturday') {
        switch(type) {
            case 'Students': total = people * 9.80; break;
            case 'Business': total = people * 15.60; break;
            case 'Regular': total = people * 20; break;
        }
    } else if (day === 'Sunday') {
        switch(type) {
            case 'Students': total = people * 10.46; break;
            case 'Business': total = people * 16; break;
            case 'Regular': total = people * 22.50; break;
        }
    }
    if (type === 'Students' && people >= 30) {
        total *= 0.85;
    } else if (type === 'Business' && people >= 100) {
        switch(day) {
            case 'Friday': total = (people - 10) * 10.90; break;
            case 'Saturday': total = (people - 10) * 15.60; break;
            case 'Sunday': total = (people - 10) * 16; break;
        }
    } else if (type === 'Regular' && people >= 10 && people <= 20) {
        total *= 0.95;
    }
    console.log(`Total price: ${total.toFixed(2)}`);
}
vacation(30,'Students','Sunday');