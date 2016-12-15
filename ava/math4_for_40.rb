def attempt_to_render_n_from_4(n, v, x, y, z, loud=false)
        [ 0, v, -v ].each do |v1|
                [ 0, x, -x ].each do |x1|
                        [ 0, y, -y ].each do |y1|
                                [ 0, z, -z ].each do |z1|
                                        if v1 + x1 + y1 + z1 == n
                                                if loud
                                                        str = "#{n} = #{v1} + #{x1} + #{y1} + #{z1}"
                                                        str.gsub!(/= 0/, '=')
                                                        str.gsub!(/ \+ 0/, '')
                                                        str.gsub!(/\+ -/, '-')
                                                        str.gsub!(/=\+/, '= ')
                                                        puts str
                                                end
                                                return true
                                        end
                                end
                        end
                end
        end
        return false
end
def attempt_to_render_n(n, v, x, y, z, loud)
        attempt_to_render_n_from_4(n, v, x, y, z, loud)
end

def attempt(a, loud=false)
        1.upto(40).each do | z |
                if ! attempt_to_render_n(z, a[0],a[1],a[2],a[3], loud)
                        return false
                end
        end
        if !loud
                attempt(a, true)
        end
        return true
end

1.upto(40).each do | v |
        (v+1).upto(40).each do | w |
                (w+1).upto(40).each do | x |
                        (x+1).upto(40).each do | y |
                                if attempt([v, w, x, y])
                                        puts "#{v}, #{w}, #{x}, #{y} works"
                                end
                        end
                end
        end
end


