export const validator = (email, password, name) => {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isEmailValid){
        return 'Invalid Email';
    }
    if(!isPasswordValid){
        return 'Invalid Password';
    }
    if(name === ''){
        return 'Invalid Name';
    }
    return null;
}