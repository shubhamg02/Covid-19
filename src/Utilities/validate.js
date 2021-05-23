export default function validate({name, email, phoneno, city, bloodgrp}) {
    let errors = {}

    if(!name.trim()) {
        errors.name = "Name required"
    } else if (/\d/.test(name)) {
        errors.city = "Name is invalid"
    }

    if(!email) {
        errors.email = "Email required"
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
        errors.email = 'Email address is invalid'
    }

    if(!phoneno) {
        errors.phoneno = "Phone number required"
    } else if (!/^\d{10}$/.test(phoneno)) {
        errors.phoneno = 'Phone number is invalid'
    }

    if(!city.trim()) {
        errors.city = "City required"
    } else if (/\d/.test(city)) {
        errors.city = "City is invalid"
    }

    if(!bloodgrp.trim()) {
        errors.bloodgrp = "Blood group required"
    } else if (! /(A|B|AB|O)[+-]/.test(bloodgrp)) {
        errors.bloodgrp = "Invalid Blood group"
    }

    return errors;
}