export default {
    name: "app",
    data() {
        return {
            user: {
                email: "",
                password: "",
            },
            submitted: false
        };
    },
    validations: {
        user: {
            email: {email },
            password: {minLength: minLength(6) }
        }
    },
    methods: {
        handleSubmit(e) {
            this.submitted = true;

            // stop here if form is invalid
            this.$v.$touch();
            if (this.$v.$invalid) {
                return;
            }
        }
    }
};