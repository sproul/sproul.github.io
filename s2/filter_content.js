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
        line = data_array[j]
        //if (line.includes(input))
        var re = new RegExp(input, "i")
        if (-1 != line.search(re))
        {
            z += line + "<br>"
        }
    }
    $("#all").html(z)
    $("#searching_for").html(input)
}
function on_loaded()
{
    load_data()
    show()
    document.onkeyup = on_keyup;
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
            if (input.length > 0)
            {
                input = input.slice(0, input.length - 1)
            }
            show()
        } 
        else if (e.key.length == 1)
        {
            input += e.key
            show()
        }
    }
    return true
}
