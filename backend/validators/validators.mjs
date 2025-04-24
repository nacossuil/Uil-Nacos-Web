import check from 'express-validator';

// console.log(check)
export const newEventValidator = [
    check.check("title").not().isEmpty().withMessage("Title is required"),
    check.check("description").not().isEmpty().withMessage("Description is required"),
    check.check("startDateAndTime").not().isEmpty().withMessage("Start date is required"),
    check.check("endDateAndTime").not().isEmpty().withMessage("End date is required"),
    check.check("price").not().isEmpty().withMessage("Price is required"),
    check.check("venue").not().isEmpty().withMessage("Location is required"),
];

const matricNumberIsValid = (studentId) => {
    const regex = /^\d{2}\/52HA\d{3}$/;
    return studentId.length === 10 && regex.test(studentId);
}

const sessionIsValid = (session) => {
    const regex = /^\d{4}-\d{4}$/;
    return session.length === 9 && regex.test(session);
}

export const execsValidator = [
    check.check('name').notEmpty().withMessage("Name is required"),
    check.check('email').isEmail().withMessage("Invalid Email"),
    check.check('position').notEmpty().withMessage("Position is required"),
    check.check('studentId')
        .custom(matricNumberIsValid)
        .withMessage("Invalid Student id..."),
    check.check('session')
        .custom(sessionIsValid)
        .withMessage("Invalid Session. The valid format is - 2022-2023")];

export const sessionvalidator = [
    check
        .check("session")
        .custom(sessionIsValid)
        .withMessage("Invalid Session. The valid format is - 2022-2023")];

export const formValidator = [
    check.check('email').isEmail().withMessage("Invalid Email address."),
    check.check('subject').notEmpty().withMessage("Field cannot be blank"),
    check.check('message').notEmpty().withMessage("Field cannot be blank")]