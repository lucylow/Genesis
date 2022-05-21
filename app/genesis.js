window.sliderControl = new function() {
  //Add style to body to dynamically adjust slider heights
  $("body").append(
    $("<style />")
      .attr("id", "sliderHeights")
      .attr("type", "text/css")
  );
  
  var self = this;
  
  //Move the selected tab
  self.moveSelector = function(position) {
    $(".slider-tab-container").removeClass('p1 p2 p3 p4').addClass(position);
  }
  
  $(".tab").on("click mouseover", function() {
    self.moveSelector($(this).data("pos"));
  });
  
  //Adjust the height of the container to match the content
  self.tabContainer = ".slider-tab-container";
  self.tabContentChanged = function() {
    var styles = "";
    $(".tab-content").each(function(i, node) {
      styles += ".slider-tab-container.p" 
        + (i+1) 
        + " .slider-tab-content-container { min-height: " 
        + node.offsetHeight 
        + "px; } \n";
    });  
    $("#sliderHeights").html(styles);
  }  
  $(self.tabContainer).on("tab-content-changed", self.tabContentChanged);
  $(self.tabContainer).trigger("tab-content-changed");
}();

//The expander on the second tab
//This is important cause the slider needs to shrink or grow in height 
//as the content size of the content changes
window.expander = new function() {
  var self = this;
  
  self.toggleExpanderClick = function() {
    $(this).toggleClass("expanded"); 
    window.sliderControl.tabContentChanged();
  }
  
  $(".expander").on("click", self.toggleExpanderClick);
}();
