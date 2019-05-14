var app = new Vue({
    el: "#app",
    data: {
        fname: "",
        lname: "",
        email: "",
        nb: "No",
        city: ""
    },
    computed: {
        fullname: function(){
            if(this.fname && this.lname){
                return this.fname + " " + this.lname;   
            }
        },
        datetoday: function(){
            return  new Date();
        },
    },
    methods: {
        resetForm: function(){
            this.fname = "";
            this.lname = "";
            this.email = "";
            this.city = ""
            this.nb = "No";
        }
    }

});
