import Prelude hiding (elem)
main :: IO();


inRange :: Ord a => a -> a -> a -> Bool;
--inRange min max x = x>=min && x<= max;
inRange min max x =
    let
        lowerBound = min <= x;
        upperBound = max >= x;
    in
        lowerBound && upperBound

asc :: Int -> Int -> [Int];
asc n m
    | m < n = []
    | m == n = [m]
    | m > n = n : asc(n+1) m

fib 0 = 0
fib 1 = 1
fib n = fib (n-1) + fib (n-2)

elem :: (Eq a) => a-> [a] -> Bool
elem _ [] = False
elem e (x:xs) = (e == x) || elem e xs


nub :: (Eq a) => [a] -> [a]
nub (x: xs) 
    | x `elem` xs = nub xs
    | otherwise = x : nub xs


isAsc :: (Ord a) =>  [a] -> bool;
isAsc (x:xs)
    | x >= head xs = (isAsc xs)
    | otherwise = False

main = do
    print $ fib 15 + 5 ;

