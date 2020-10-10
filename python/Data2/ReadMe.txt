Pressure duration 5 seconds for each GT set without waiting between events

GT#0 : Diagonal
[[1,1], [2,2], [3,3], [4,4]]

GT#1 : Ordered press
[[1,1], [1,2], [1,3], [1,4],
[2,1], [2,2], [2,3], [2,4],
[3,1], [3,2], [3,3], [3,4],
[4,1], [4,2], [4,3], [4,4]]

GT#2 : Press 2 sensors at the same time
[
[ [1,1], [2,1] ],
[ [1,2], [2,2] ],
[ [1,3], [2,3] ],
[ [1,4], [2,4] ]
]

GT#3 : Press 3 sensors at the same time
[
[ [1,1], [1,2], [2,1] ],
[ [1,2], [2,1], [2,2] ],
[ [1,2], [2,2], [3,1] ],
[ [2,2], [3,1], [3,2] ],
[ [3,1], [3,2], [4,1] ],
[ [3,2], [4,1], [4,2] ],
]


İstediğin şekilde veri topladım. Her verinin başında 5-6 saniyelik bekleme süresi var, onları uygun olarak silersin. Geçişlerde olabildiğince hızlı olmaya çalıştım ama yinede geçişte yarım saniyelik bir boşluk oluşuyor. Verinin toplama frekansı 28 Hz'dir.

Representation olarak ben 2-1 deki 2'yi x ekseni, 1'i y ekseni olarak almıştım. Fakat senin görselde 2 row, 1'i column gibi matrix olarak aldığını gördüm. O nedenle bende şu andaki ölçümü senin represantasyona göre uyarladım. Veri gelme sırası 1-1, 1-2, 1-3 şeklindedir.