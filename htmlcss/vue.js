const app = Vue.createApp({
    data(){
        return {
            url:"https://www.list.am/",
            shopdrop:true,
            title:"ey frend",
            text:"text eyy",
            age:1,
            x:1,
            y:1,
            books: [
                { title:"name of the wind",author:"pariick"},
                { title:"the way og kings",author:"brandon"},
                { title:"the final empire",author:"urish"}
            ]
        }
    },
    methods:{
  
        togleshowbuks(){
            this.shopdrop = !this.shopdrop
        },
        handleEvent(e,data){
            console.log(e.type,e)
            if (data){
                console.log(data)
            }
        },
        handlimousover(e){ 
            this.x = e.offsetX
            this.y = e.offsetY
        }
        

    }
})

app.mount("#hellow")