import { Directive,ElementRef,Renderer } from '@angular/core';

/**
 * Generated class for the ParallaxHeaderDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[parallax-header]', // Attribute selector
  host : {
    '(ionScroll)' : 'onContentScroll($event)'
  }
})
export class ParallaxHeaderDirective {
  translateAmt;
  header;
  headerHeight;
  constructor(public element:ElementRef,public renderer:Renderer) {
    console.log('Hello ParallaxHeaderDirective Directive');
  }

  ngOnInit(){
    let content = this.element.nativeElement.getElementsByClassName('scroll-content')[0];
    this.header = content.getElementsByClassName('header-image')[0];
    let mainContent = content.getElementsByClassName('main-content')[0];
    this.headerHeight = this.header.clientHeight;

    this.renderer.setElementStyle(this.header, 'webkitTransformOrigin', 'center bottom');
    this.renderer.setElementStyle(this.header, 'background-size', 'cover');
    this.renderer.setElementStyle(mainContent, 'position', 'absolute');
  }

  onContentScroll(ev){
    if(ev.scrollTop > 0){
      this.translateAmt = ev.scrollTop / 2;
    }

    this.renderer.setElementStyle(this.header, 'webkitTransform', 'translate3d(0,' + this.translateAmt + 'px,0)');
  }

}
