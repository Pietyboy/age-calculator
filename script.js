const actual_date = new Date();
const ListOfDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function error_checker(){
    const day = document.querySelector('#day').value;
    const month = document.querySelector('#month').value;
    const year = document.querySelector('#year').value;

    year % 4 == 0 ? ListOfDays[1] = 29 : '';
    

    if (day == null || month == null || year == null){
        return false;
    } else { 
        if ( year > actual_date.getFullYear || year < 0){
                return false;
            } else { if (month < 0 && month > 12){
                    return false;
                } else { if (day > 0 && day < 32 && day <= ListOfDays[month-1])
                            return true;
                        }
                    }
                } return false;
}

function error_on(){
    document.querySelector('#day_name').style.color = '#ff5757';
    document.querySelector('#month_name').style.color = '#ff5757';
    document.querySelector('#year_name').style.color = '#ff5757';

    document.querySelector('#day').style.borderColor = '#ff5757';
    document.querySelector('#month').style.borderColor = '#ff5757';
    document.querySelector('#year').style.borderColor = '#ff5757';

    document.querySelector('#day_error').hidden = false;
    document.querySelector('#month_error').hidden = false;
    document.querySelector('#year_error').hidden = false;
}

function error_off(){
    document.querySelector('#day_name').style.color = '#716f6f';
    document.querySelector('#month_name').style.color = '#716f6f';
    document.querySelector('#year_name').style.color = '#716f6f';

    document.querySelector('#day').style.borderColor = '#dbdbdb';
    document.querySelector('#month').style.borderColor = '#dbdbdb';
    document.querySelector('#year').style.borderColor = '#dbdbdb';

    document.querySelector('#day_error').hidden = true;
    document.querySelector('#month_error').hidden = true;
    document.querySelector('#year_error').hidden = true;
}

function actual_age(){
    const birthday_day = document.querySelector('#day').value;
    const birthday_month = document.querySelector('#month').value;
    const birthday_year = document.querySelector('#year').value;

    year % 4 == 0 ? ListOfDays[1] = 29 : '';

    const error = document.querySelector('#error');

    if (error_checker()){

        error_off();
        
        let age_years = actual_date.getMonth() + 1 >= birthday_month ? actual_date.getFullYear() - birthday_year : actual_date.getFullYear() - birthday_year - 1;
        let age_months = actual_date.getMonth() + 1 >= birthday_month ? actual_date.getMonth() + 1 - birthday_month : 12 - Math.abs(actual_date.getMonth() - birthday_month);
        let age_days;
        if (actual_date.getDate() >= birthday_day){
            age_days = actual_date.getDate() - birthday_day;
        } else {
            age_days = ListOfDays[actual_date.getMonth()-1 < 0 ? 11 : actual_date.getMonth()-1] - Math.abs(actual_date.getDate() - birthday_day);
        }

        
        document.querySelector('#years_output').innerHTML = '';
        document.querySelector('#years_output').innerHTML = age_years;

        document.querySelector('#months_output').innerHTML = '';
        document.querySelector('#months_output').innerHTML = age_months;
        
        document.querySelector('#days_output').innerHTML = '';
        document.querySelector('#days_output').innerHTML = age_days;
        
    } else {
        error_on();
    }
}