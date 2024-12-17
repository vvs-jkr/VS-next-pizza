import { Container, Filters, SortPopup, Title, TopBar } from '@/components/shared'
import { Categories } from '@/components/shared/categories'

export default function Home() {
  return (
    <>
      <Container>
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
			{/* Filter */}
          <div className="w-[250px]">
				<Filters />
			 </div>


			 {/* Pizzas */}

			 {/* <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList title="Пиццы" items={[1, 2, 3, 4, 5]} />
              <ProductsGroupList title="Комбо" items={[1, 2, 3, 4, 5]} />
            </div>

            <div className="flex items-center gap-6 mt-12">
              <Pagination pageCount={3} />
              <span className="text-sm text-gray-400">5 из 65</span>
            </div>

        </div>
			 </div>*/}
        </div> 
      </Container>
    </>
  )
}
