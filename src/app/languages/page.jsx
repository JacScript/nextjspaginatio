import Link from "next/link";
import { getPosts } from "../../../_actions/postActions";

export default async function Page({ searchParams }) {
  let page = parseInt(searchParams.page, 10);
  page = !page || page < 1 ? 1 : page;
  const perPage = 8;

  const { data, errMsg, itemCount } = await getPosts(perPage, page);

  const totalPages = Math.ceil(itemCount / perPage);

  const prevPage = page - 1 > 0 ? page - 1 : 1;
  const nextPage = page + 1;

  // const pageNumbers = [];
  // const offsetNumber = 3;
  // for (let i = page - offsetNumber; i <= page + offsetNumber; i++) {
  //   if (i >= 1 && i <= totalPages) {
  //     pageNumbers.push(i);
  //   }
  // }

  if (errMsg) return <h1>{errMsg}</h1>;

  return (
    <main className="h-screen w-screen pt-8 bg-black">
      <div className="w-5/6 mx-auto">
        <ul className="grid grid-cols-4 gap-4 text-center">
          {data.map((item) => (
            <li
              key={item._id}
              className="bg-green-500 rounded-md p-4 text-black"
            >
              {item.name}
            </li>
          ))}
        </ul>

        <div className="flex justify-center items-center mt-16">
          <div className="flex border-[1px] gap-4 rounded-[10px] border-light-green p-4">
            {page === 1 ? (
              <div className="opacity-60 text-zinc-400" aria-disabled="true">
                Previous
              </div>
            ) : (
              <Link
                className="text-white"
                href={`?page=${prevPage}`}
                aria-label="Previous Page"
              >
                Previous
              </Link>
            )}

            {pageNumbers.map((pageNumber, index) => (
              <Link href={`?page=${pageNumber}`}>{pageNumber}</Link>
            ))}

            {page === totalPages ? (
              <div className="opacity-60 text-zinc-400 " aria-disabled="true">
                Next
              </div>
            ) : (
              <Link
                className="text-white"
                href={`?page=${nextPage}`}
                aria-label="Next Page"
              >
                Next
              </Link>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
