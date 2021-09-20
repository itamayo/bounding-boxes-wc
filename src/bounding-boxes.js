
import {tmpl} from './template';
export class BoundingBoxes extends HTMLElement {
    static get observedAttributes () {
        return [imgUrl,width,height,bboxes,color];
      }

    constructor() {
        super();
        this.attachShadow({mode: 'open'}).appendChild(tmpl.content.cloneNode(true));;
        //this.shadowRoot.innerHTML+="<style>"+buttonClass+"</style>";
        this.audioContext = null;
        this.meter = null;
        this.canvasContext = null;
        this.rafID = null;
    }
    get imgUrl (){
        return this.getAttribute('imgUrl');
    }
    set imgUrl (c){
        this.setAttribute('imgUrl',c)
    }
    get bboxes (){
        return this.getAttribute('bboxes');
    }
    set bboxes (c){
        this.setAttribute('bboxes',c)
    }
    get color (){
        return this.getAttribute('color');
    }
    set color (c){
        this.setAttribute('color',c)
    }
    get width(){
        return  parseInt(this.getAttribute("width"));
    }
    set width(x){
        if (this.shadowRoot.querySelector("canvas")) {
                    
            this.shadowRoot.querySelector("canvas").width = this.width;
            
        }
        this.setAttribute("width", parseInt(x));
    }
    get height(){
        return  parseInt(this.getAttribute("height"));
    }
    set height(x){
        if (this.shadowRoot.querySelector("canvas")) {
                    
            this.shadowRoot.querySelector("canvas").height = this.height;
            
        }
        this.setAttribute("height", parseInt(x));
    }
    async connectedCallback() {
         this.color = "green";
        this.init();
    }
    init() {
        // grab our canvas
        let canvas = this.shadowRoot.querySelector("canvas")
        canvas.width = this.width;
        canvas.height = this.height;
        this.img = this.shadowRoot.querySelector('img');
        this.img.src = this.imgUrl;
        this.canvasContext = this.shadowRoot.querySelector("canvas").getContext("2d");
        this.render();
  

    }

    render(time) {
        // clear the background
        let _bboxes = [];
        this.canvasContext.clearRect(0, 0, this.width, this.height);
        this.canvasContext.drawImage(this.img,0,0,this.img.width, this.img.height);
        if (this.bboxes){
            if (typeof this.bboxes==="string") _bboxes = JSON.parse(this.bboxes);
            for(var idx = 0; idx < _bboxes.length; idx++){
                this.canvasContext.strokeStyle =_bboxes[idx].color || "green";
                if (_bboxes[idx].label){
                    this.canvasContext.font = "20px Arial";
                    this.canvasContext.fillStyle =_bboxes[idx].color || "green";
                    this.canvasContext.fillText(_bboxes[idx].label, _bboxes[idx].x, _bboxes[idx].y);
                }
                this.canvasContext.strokeRect(_bboxes[idx].x, _bboxes[idx].y, _bboxes[idx].width, _bboxes[idx].height);

            }
        }
   
 

        // set up the next visual callback
        this.rafID = window.requestAnimationFrame(this.render.bind(this));
    }

   
}
customElements.define('bounding-boxes', BoundingBoxes);
