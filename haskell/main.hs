main :: IO();


inRange :: Ord a => a -> a -> a -> Bool;
inRange min max x = x>=min && x<= max;





main = do 
    print(inRange 3 5 6);

