const app = {
    data() {
        return {
            photos: [
                { src: 'image/tree1.jpg', alt: 'view 1', caption: 'Moist Evergreen Forest',show:true, done: false },
                { src: 'image/tree2.jpg', alt: 'view 2', caption: 'Dry Evergreen Forest',show:true, done: false },
                { src: 'image/tree3.jpg', alt: 'view 3', caption: 'Hill Evergreen Forest' ,show:true, done: false},
            ],
            search :{
                box:false,
                icon:true
            },
            error : false,
            popup: false,
            popupsrc: ''
        }
    },
    methods: {
        
        openbox(){
            this.search.box=!this.search.box;
            this.search.icon=!this.search.icon;
            for(let i=0; i<this.photos.length; i++){
                this.photos[i].show=true;
                this.error=false;
            }
         },hover(index){
            
         },

         searchphoto() {
            if (this.inputTask) {
                for (let i = 0; i < this.photos.length; i++) {
                    if (this.photos[i].caption.toLowerCase().includes(this.inputTask.toLowerCase())) {
                        this.photos[i].show = true;
                    }
                    else {
                        this.photos[i].show = false;
                        this.error=!this.error;
                    }
                }
            }
        },
        showPopup(index){
            this.popupsrc = this.photos[index].src;
            this.popup = true;
            this.photos[index].done = !this.photos[index].done;
        }
    },
    computed: {
        countphoto(){
            return this.photos.length
        },
       
    }
}
Vue.createApp(app).mount('#container')