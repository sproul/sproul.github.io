"use script"
var data_array

function load_data()
{
    data_array = data.split(/\n/)
}
function show()
{
    var z = ""
    for (var j = 0; j < data_array.length; j++)
    {
        z += data_array[j] + "<br>"
    }
    $("#all").html(z)
    $("#searching_for").html(input)
}
function on_loaded()
{
    debugger
    load_data()
    show()
}
var input = ""
function on_keyup(e)
{
    if(e)
    {
        // KeyboardEvent documented at https://www.w3schools.com/jsref/obj_keyboardevent.asp
        //  
        // keyCode==13 on <enter>
        var ctrlKey = e.ctrlKey
        var altKey = e.altKey
        var key = e.key
        //if (key != 'Control')
        //{
        //    last_key_was_control = false
        //}
        if (e.key == "Enter") 
        {
            input = ""
            show()
        } 
        else if (e.key == "Backspace")
        {
            input = "xxxxxx"
            show()
        } 
        else if (!altKey)
        {
            input += e.key
            show()
        }
    }
    return true
}
