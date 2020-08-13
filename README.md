Mobs

- State

      	Observable:
      		- 관찰받는 값 (tracked value)
      		- tracking 하고 change 하고 싶은 값에 observable 설정

* Action

      	Action:
      		- setter
      		- 뭔가를 하는 것
      		- excel 에서 값을 입력하는 것과 비슷
      		- http 메서드로 비교하면 put 같은 느낌

- Derivations

      	Computed:
      		- getter
      		- 값을 가져오는 것
      		- excel 에서 계산되어지는 값과 비슷
      		- http 메서드로 비교하면 get 같은


    Reaction:
    	- computed 와 비슷한데 computed 같이 새 값을 가져오는 것은 아니고
    		state 가 변경되 때 side effect 로써 작업을 수행함.
    	- console 을 찍는거나 하는 등.
    	- middleware 와 비슷환 느낌
